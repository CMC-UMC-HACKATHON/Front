import Badge from '../ui/Badge';
import styles from './ChallengeList.module.css';

const ChallengeList = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={styles.card}>
          <img src="https://s3-alpha-sig.figma.com/img/929d/1086/28e016a6327502d8d10b0d529ebc154e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ag-3FjfV~q34m~dhXiIA9wvbfsJulQY2IaCboTdZxShTdVIXQ2cxnF2hR060sRWm1WpA1Dlj7PLfAUttpg1CaL~FoSSm~zlcOBj7hiHNvXgVHa8kkYB8VMNmUq-9g~yYFWFnbxX1ltKQvzvr-3BArEL6pusn1iZzkD8B79mJXwOrOk0~2sTIyCBbNRIjdBYUDcE~BjT~0Z28-Wts3JgoM41iP9HMOm5WcQ5ON6XiAIuOg~sQWL8SSKdW9SKNvS7GZDdboJlwRjMpy2LupIZKj-eDgBNtmO1eNy9mPI8U1XiLWcouq2U6Bp20zAgI0PPtzX4L16D2qFWejlIhQjRSsQ__" />
          <div className={styles.label}>
            <Badge
              text="랜덤박스"
              className={`${styles['badge-text']} flex-center`}
            />
            <Badge
              text="운동"
              className={`${styles['badge-text']} flex-center`}
            />
          </div>
          <div className={styles.info}>
            <h3>디지털 디톡스 가보자!</h3>
            <p className="p2">2024.06.01 - 2024.08.02</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;
