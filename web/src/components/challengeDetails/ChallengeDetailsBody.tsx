import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import ChallengeExplain from './ChallengeExplain';
import ChallengeDetailsTitle from './ChallengeDetailsTitle';
import ChallengeDetailsPolicy from './ChallengeDetailsPolicy';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  getChallenge,
  participateChallenge,
} from '@/services/challenges.service';

const ChallengeDetailsBody = () => {
  const params = useParams();
  const challengeId = params.id;

  const accessToken = localStorage.getItem('accessToken');

  const { data: challenge } = useQuery({
    queryKey: ['challenge', challengeId],
    queryFn: async () => await getChallenge(parseInt(challengeId!)),
    enabled: !!challengeId,
    select: (data) => data.result as ChallengeType,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () =>
      await participateChallenge(parseInt(challengeId!), accessToken!),
  });

  return (
    <div className={styles.container}>
      {/* 제목, 기간, 몇 명이 함께하고 있는지 나타냄 */}
      {challenge ? <ChallengeDetailsTitle challenge={challenge} /> : null}
      <hr className={styles.hr2} />
      {/* 챌린지 설명 컴포넌트 */}
      <ChallengeExplain />
      <hr className={styles.hr2} />
      {/* 환불 정책 컴포넌트 */}
      <ChallengeDetailsPolicy />
      <button
        disabled={isPending}
        className={styles.partiBtn}
        onClick={async () => {
          if (!accessToken || !challengeId) {
            return;
          }
          await mutateAsync();
        }}
      >
        참가하기
      </button>
    </div>
  );
};

export default ChallengeDetailsBody;
