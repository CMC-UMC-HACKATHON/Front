import React from 'react';
import ChallengeResultSubtitle from './ChallengeResultSubtitle';
import styles from './MyReward.module.css';
import Badge from '../ui/Badge';
import RewardImage from '../../assets/rewardImage.png'

const MyReward = () => {
  const badgeText = ['MONEY', '공통'];

  return (
    <div>
      <ChallengeResultSubtitle>내 리워드</ChallengeResultSubtitle>
      <div className={styles.container}>
      <img src={RewardImage} alt='reward image' className={styles['reward-image']} />        <div className={styles.flex}>
          <p className={`p4 ${styles['mission-title-text']}`}>
            [미션] 미션 제목
          </p>
          <h3 className={styles['main-text']}>
            최종 순위 1위
            <br />
            <span className={styles.reward}>1,000원</span>을 획득했어요
          </h3>
          <div className={`${styles['badge-container']}`}>
            {badgeText.map((text) => (
              <Badge
                text={text}
                className={`${styles['badge-text']} flex-center`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReward;
