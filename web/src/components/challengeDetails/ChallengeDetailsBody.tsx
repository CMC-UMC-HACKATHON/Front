import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import ChallengeExplain from './ChallengeExplain';
import ChallengeDetailsTitle from './ChallengeDetailsTitle';
import ChallengeDetailsPolicy from './ChallengeDetailsPolicy';

const ChallengeDetailsBody = () => {
  return (
    <div className={styles.container}>
      {/* 제목, 기간, 몇 명이 함께하고 있는지 나타냄 */}
      <ChallengeDetailsTitle />
      <hr className={styles.hr2} />
      {/* 챌린지 설명 컴포넌트 */}
      <ChallengeExplain />
      <hr className={styles.hr2} />
      {/* 환불 정책 컴포넌트 */}
      <ChallengeDetailsPolicy />
      <button className={styles.partiBtn}>참가하기</button>
    </div>
  );
};

export default ChallengeDetailsBody;
