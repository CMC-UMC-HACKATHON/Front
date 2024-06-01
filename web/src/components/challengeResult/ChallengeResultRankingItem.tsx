import React from 'react';
import styles from './ChallengeResultRankingItem.module.css';

const ChallengeResultRankingItem = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.rank}>1</div>
        <div className={styles.nickname}>name</div>
      </div>
      <div className={styles.count}>n개</div>
    </div>
  );
};

export default ChallengeResultRankingItem;
