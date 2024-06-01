import * as React from 'react';
import styles from '../profile/Complete.module.css';
import WorkingSVg from '../../assets/working.svg?react';

const Complete = () => {
  return (
    <div>
      <h3 className={styles.h3}>완료된 챌린지</h3>
      <div>
        <WorkingSVg />
      </div>
    </div>
  );
};

export default Complete;
