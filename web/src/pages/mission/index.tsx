import MissionHeader from '@/components/mission/MissionHeader';
import styles from './Mission.module.css';
import MissionDate from '@/components/mission/MissionDate';
import MissionRequired from '@/components/mission/MissionRequired';
import MissionToday from '@/components/mission/MissionToday';

const Mission = () => {
  return (
    <div className={styles.container}>
      <MissionHeader />
      <div className={styles.card}>
        <p className="p3">총 미션 달성 수</p>
        <p className="p3">30개</p>
      </div>
      <MissionDate />
      <MissionRequired />
      <MissionToday />
    </div>
  );
};

export default Mission;
