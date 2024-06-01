import Box from '@/components/profile/Box';
import Complete from '@/components/profile/Complete';
import Profile from '@/components/profile/Profile';
import Progressing from '@/components/profile/Progressing';
import * as React from 'react';
import styles from '../mypage/MyPage.module.css';

const Mypage = () => {
  return (
    <div className={styles.container}>
      <h2>마이페이지</h2>
      <Profile />
      <Box />
      <hr className={styles.hr} />
      <Progressing />
      <hr className={styles.hr} />
      <Complete />
    </div>
  );
};

export default Mypage;
