import * as React from 'react';
import styles from '../profile/Complete.module.css';
import WorkingSmallSVg from '../../assets/workingSmall.svg?react';

const Complete = () => {
  return (
    <div>
      <h3 className={styles.h3}>완료된 챌린지</h3>
      <div className={styles.container}>
        <WorkingSmallSVg />
        <div className={styles.container1}>
          <div className={styles.container2}>
            <h3 style={{ margin: '0' }}>디지털 보톡스 가바!</h3>
            <h4
              style={{ margin: '0', color: 'var(--gray2)', fontWeight: '400' }}
            >
              2024.06.01 - 2024.08.02
            </h4>
          </div>
          <h4 className={styles.h4}>달성률 100%</h4>
        </div>
      </div>
      <div className={styles.container}>
        <WorkingSmallSVg />
        <div className={styles.container1}>
          <div className={styles.container2}>
            <h3 style={{ margin: '0' }}>디지털 보톡스 가바</h3>
            <h4
              style={{ margin: '0', color: 'var(--gray2)', fontWeight: '400' }}
            >
              2024.06.01 - 2024.08.02
            </h4>
          </div>
          <h4 className={styles.h4}>달성률 100%</h4>
        </div>
      </div>
    </div>
  );
};

export default Complete;
