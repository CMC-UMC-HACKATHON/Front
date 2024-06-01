import MissionHeader from '@/components/mission/MissionHeader';
import styles from './Mission.module.css';
import MissionDate from '@/components/mission/MissionDate';
import MissionRequired from '@/components/mission/MissionRequired';
import MissionToday from '@/components/mission/MissionToday';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMissions } from '@/services/mission.service';

const Mission = () => {
  const params = useParams();
  const challengeId = params.id;

  const { data: missions } = useQuery({
    queryKey: ['missions', challengeId],
    queryFn: async () => getMissions(parseInt(challengeId!)),
    enabled: !!challengeId,
    select: (data) => data.result,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <MissionHeader />
      <div className={styles.card}>
        <p className="p3">총 미션 달성 수</p>
        <p className="p3">{missions ? missions.completedMissionCount : 0}개</p>
      </div>
      <MissionDate challengeId={challengeId || ''} />
      <MissionRequired />
      <MissionToday list={missions?.missionList} />
    </div>
  );
};

export default Mission;
