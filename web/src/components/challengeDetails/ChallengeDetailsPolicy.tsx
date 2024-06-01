import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import PolicySVg from '../../assets/policy.svg?react';
import ChallengeExplain from './ChallengeExplain';
import ChallengeDetailsTitle from './ChallengeDetailsTitle';

const ChallengeDetailsPolicy = () => {
  return (
    <>
      <div className={styles.container2}>
        <PolicySVg />
        <h2>환불 정책</h2>
      </div>

      <h3>챌린지 시작 전까지 100% 환불</h3>
      <p>
        챌린지가 시작되기 전까지 신청한 챌린지를 자유롭게 취소할 수 있습니다.
      </p>

      <h3>챌린지 시작 후 취소 불가</h3>
      <p>
        챌린지는 여러 회원님들이 함께 하는 대회인만큼, 챌린지 시작후에는 환불이
        불가능합니다.
      </p>
    </>
  );
};

export default ChallengeDetailsPolicy;
