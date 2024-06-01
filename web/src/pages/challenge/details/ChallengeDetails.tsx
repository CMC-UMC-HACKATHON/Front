import React, { useState } from 'react';
import styles from '../details/ChallengeDetails.module.css';
import CalenderSvg from '../../../assets/calender.svg?react';
import ChallengeHeader from '@/components/challenge/ChallengeHeader';
import ChallengeDetailsBody from '@/components/challengeDetails/ChallengeDetailsBody';

const ChallengeDetails = () => {
  return (
    <div>
      <ChallengeHeader />
      {/* <div className={styles['body-container']}></div> */}
      <ChallengeDetailsBody />
    </div>
  );
};

export default ChallengeDetails;
