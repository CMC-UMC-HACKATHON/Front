import styles from './MissionDate.module.css';

const MissionDate = () => {
  return (
    <div className={styles.container}>
      <div className={styles['date-text']}>
        <h3>6월 1일 (토요일)</h3>
        <div className={styles.badge}>주</div>
      </div>
    </div>
  );
};

export default MissionDate;
