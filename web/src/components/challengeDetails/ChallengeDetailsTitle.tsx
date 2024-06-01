import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import CalenderSVg from '../../assets/calender.svg?react';
import PeopleSVg from '../../assets/people.svg?react';

const ChallengeDetailsTitle = ({ challenge }: { challenge: ChallengeType }) => {
  const {
    title,
    startDate,
    endDate,
    challengeAmount,
    challengeTotalAmount,
    participantNum,
  } = challenge;

  return (
    <>
      <h1>{title}</h1>
      <div className={styles.container2}>
        <CalenderSVg />
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className={styles.container2}>
        <PeopleSVg />
        <p>{participantNum}명의 챌린저와 함께 하고 있어요!</p>
      </div>
      <hr className={styles.hr1} />
      <div className={styles.container3}>
        <h3 style={{ marginTop: '30px' }}>챌린저 도전 금액</h3>
        <h3 style={{ marginTop: '30px' }} className={styles.fontColor}>
          {challengeAmount}원
        </h3>
      </div>
      <div className={styles.container3}>
        <h3>총 금액</h3>
        <h3 className={styles.fontColor}>{challengeTotalAmount}원</h3>
      </div>
    </>
  );
};

export default ChallengeDetailsTitle;
