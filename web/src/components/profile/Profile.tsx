import * as React from 'react';
import styles from '../profile/Profile.module.css';
import ProfileSVg from '../../assets/profile.svg?react';
import PenSVg from '../../assets/pen.svg?react';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <ProfileSVg />
        <h2 className={styles.nickName}>말랑콩떡</h2>
      </div>
      <div>
        <button className={styles.btnContainer}>
          <PenSVg />
          수정하기
        </button>
      </div>
    </div>
  );
};

export default Profile;
