import dayjs from 'dayjs';
import styles from './MissionDate.module.css';
import StarIcon from '../../assets/starIcon.svg?react';

import 'dayjs/locale/ko';
dayjs.locale('ko');

const MissionDate = () => {
  const TODAY_FORMAT = 'M월 D일 (ddd요일)';
  const thisWeekSunday = Number(dayjs().startOf('week').format('D'));

  return (
    <div className={styles.container}>
      <div className={styles['date-text']}>
        <h3>{dayjs().format(TODAY_FORMAT)}</h3>
        <div className={`p3 ${styles.badge}`}>주</div>
      </div>
      <div className={styles['date-week']}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={styles.day}>
            <div className={styles.circle}>
              <StarIcon />
            </div>
            <p className="p3">{thisWeekSunday + index}</p>
          </div>
        ))}
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default MissionDate;
