import styles from './MissionDate.module.css';

const MissionDate = () => {
  return (
    <div className={styles.container}>
      <div className={styles['date-text']}>
        <h3>6월 1일 (토요일)</h3>
        <div className={`p3 ${styles.badge}`}>주</div>
      </div>
      <div className={styles['date-week']}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={styles.day}>
            <div className={styles.circle} />
            <p className="p3">{index + 1}</p>
          </div>
        ))}
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default MissionDate;
