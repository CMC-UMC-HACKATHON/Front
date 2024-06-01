import Badge from '../ui/Badge';
import styles from './MissionHeader.module.css';

const MissionHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>디지털 디톡스 가보자!</h1>
        <p className="p2">2024.06.01 - 2024.08.02</p>
      </div>
      <Badge text="운동" className={`${styles['badge-text']} flex-center`} />
    </div>
  );
};

export default MissionHeader;
