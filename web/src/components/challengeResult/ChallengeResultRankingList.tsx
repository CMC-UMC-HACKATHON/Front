import React from 'react';
import ChallengeResultSubtitle from './ChallengeResultSubtitle';
import styles from './ChallengeResultRankingList.module.css';
import ChallengeResultRankingItem from './ChallengeResultRankingItem';

const challengeResultRankingList = () => {
  const RANK_NUMBER = 3;
  return (
    <div>
      <ChallengeResultSubtitle>미션 랭킹</ChallengeResultSubtitle>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <ChallengeResultRankingItem />
          <ChallengeResultRankingItem />
          <ChallengeResultRankingItem />
        </div>
      </div>
    </div>
  );
};

export default challengeResultRankingList;
