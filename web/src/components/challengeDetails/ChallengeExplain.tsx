import * as React from 'react';
import styles from '../challengeDetails/ChallengeDetailsBody.module.css';
import PageSVg from '../../assets/page.svg?react';

const ChallengeExplain = () => {
  return (
    <>
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
    </>
  );
};

export default ChallengeExplain;
