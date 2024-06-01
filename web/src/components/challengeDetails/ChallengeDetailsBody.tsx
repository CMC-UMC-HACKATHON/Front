import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import PageSVg from '../../assets/page.svg?react';
import CalenderSVg from '../../assets/calender.svg?react';
import PeopleSVg from '../../assets/people.svg?react';
import PolicySVg from '../../assets/policy.svg?react';

const ChallengeDetailsBody = () => {
  return (
    <div className={styles.container}>
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
      <hr className={styles.hr2} />
      <div className={styles.container2}>
        <PageSVg />
        <h2>챌린지 설명</h2>
      </div>

      <p>
        일일 스크린 타임 4시간 이상 달성 시 챌린지 순위 선정에서 제한됩니다.
      </p>
      <p>
        일일 스크린 타임 4시간 이하 달성한 챌린저만 챌린지 순위에 선정되실 수
        있습니다.
      </p>
      <p>
        일일 미션을 통해 3등까지 챌린지의 순위가 부여되고, 참여 상금도 3등까지
        수령하실 수 있습니다.
      </p>
      <p>
        랜덤박스는 우승 상금으로 금액에 맞는 랜덤 상품이 지급됩니다. MONEY는
        우승 상금으로 금액이 지급됩니다.
      </p>
      <p> **챌린지는 동일 기간에 중복 참여 불가능합니다.</p>

      <hr className={styles.hr2} />

      <div className={styles.container2}>
        <PolicySVg />
        <h2>환불 정책</h2>
      </div>

      <h3>챌린지 시작 전까지 100% 환불</h3>
      <p>
        챌린지가 시작되기 전까지 신청한 챌린지를 자유롭게 취소할 수 있습니다.
      </p>

      <h3>챌린지 시작 후 취소 불가</h3>
      <p>
        챌린지는 여러 회원님들이 함께 하는 대회인만큼, 챌린지 시작후에는 환불이
        불가능합니다.
      </p>
      <button className={styles.partiBtn}>참가하기</button>
    </div>
  );
};

export default ChallengeDetailsBody;
