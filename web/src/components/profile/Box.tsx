import * as React from 'react';
import styles from '../profile/Box.module.css';
import CreditSVg from '../../assets/credit.svg?react';
import RewardSVg from '../../assets/reward.svg?react';

const Box = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <button className={styles.Btn}>
          <CreditSVg />
        </button>
        <p2 className={styles.p2}>결제내역</p2>
      </div>
      <hr className={styles.hr} />
      <div className={styles.container2}>
        <button className={styles.Btn}>
          <RewardSVg />
        </button>
        <p2 className={styles.p2}>리워드</p2>
      </div>
    </div>
  );
};

export default Box;
