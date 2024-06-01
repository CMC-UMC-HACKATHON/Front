import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import CalenderSVg from '../../assets/calender.svg?react';
import PeopleSVg from '../../assets/people.svg?react';

const ChallengeDetailsTitle = () => {
  return (
    <>
      <h1>디지털 보톡스 가보자!</h1>
      <div className={styles.container2}>
        <CalenderSVg />
        <p>2024.06.01 - 2024.08.02</p>
      </div>
      <div className={styles.container2}>
        <PeopleSVg />
        <p>100명의 챌린저와 함께 하고 있어요!</p>
      </div>
      <hr className={styles.hr1} />
      <div className={styles.container3}>
        <h3 style={{ marginTop: '30px' }}>챌린저 도전 금액</h3>
        <h3 style={{ marginTop: '30px' }} className={styles.fontColor}>
          10,000원
        </h3>
      </div>
      <div className={styles.container3}>
        <h3>총 금액</h3>
        <h3 className={styles.fontColor}>1,000,000원</h3>
      </div>
    </>
  );
};

export default ChallengeDetailsTitle;
