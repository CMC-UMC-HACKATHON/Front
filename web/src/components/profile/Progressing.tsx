import * as React from 'react';
import styles from '../profile/Progressing.module.css';
import WorkingSVg from '../../assets/working.svg?react';
import CalenderGray from '../../assets/calendergray.svg?react';

const Progressing = () => {
  return (
    <div>
      <h3 className={styles.h3}>진행 중인 챌린지</h3>
      <WorkingSVg />
      <div className={styles.container}>
        <div>
          <h3 style={{ marginBottom: '6px' }}>디지털 보톡스 가보자잇~!</h3>
          <div className={styles.container2}>
            <CalenderGray />
            <p className={styles.p2}>2024.06.01 - 2024.08.02</p>
          </div>
        </div>
        <h4 className={styles.h4}>달성률 40%</h4>
      </div>
    </div>
  );
};

export default Progressing;
