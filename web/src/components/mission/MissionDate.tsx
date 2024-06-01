import dayjs from 'dayjs';
import styles from './MissionDate.module.css';

import 'dayjs/locale/ko';
import { useQuery } from '@tanstack/react-query';
import { getMissionsByWeek } from '@/services/mission.service';
import { useId } from 'react';
import { StarIcon } from '../ui/Icons';
dayjs.locale('ko');

type MissionWeekListType = {
  date: number;
  completeYN: boolean;
};

const MissionDate = ({ challengeId }: { challengeId: string }) => {
  const TODAY_FORMAT = 'M월 D일 (ddd요일)';
  const id = useId();

  const { data: missionWeekList } = useQuery({
    queryKey: ['missionWeek', challengeId],
    queryFn: async () => await getMissionsByWeek(parseInt(challengeId)),
    enabled: challengeId !== '',
    select: (data) => data.result.missionWeekList,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <div className={styles['date-text']}>
        <h3>{dayjs().format(TODAY_FORMAT)}</h3>
        <div className={`p3 ${styles.badge}`}>주</div>
      </div>
      <div className={styles['date-week']}>
        {missionWeekList && missionWeekList.length > 0
          ? missionWeekList.map((mission: MissionWeekListType) => (
              <div key={`${mission.date}-${id}`} className={styles.day}>
                <div className={styles.circle}>
                  <StarIcon
                    color={mission.completeYN ? '#7E71FF' : '#C1C1C1'}
                  />
                </div>
                <p className="p3">{mission.date}</p>
              </div>
            ))
          : null}
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default MissionDate;
