import { useQuery } from '@tanstack/react-query';
import Badge from '../ui/Badge';
import styles from './ChallengeList.module.css';
import { getChallenges } from '@/services/challenges.service';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sendMessageToApp } from '@/utils/appWebview';
import { useEffect } from 'react';

const ChallengeList = () => {
  const [searchParams, _setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') as 'LATEST' | 'POPULAR';

  const { data: challenges } = useQuery({
    queryKey: ['challenges', sortBy],
    queryFn: async () => getChallenges(sortBy),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => data.result,
  });

  return (
    <div className={styles.container}>
      {challenges && challenges.length > 0
        ? challenges.map((challenge: ChallengeType) => (
            <Link
              to={`/challenge/${challenge.challengeId}`}
              key={challenge.challengeId}
              className={styles.card}
            >
              <img src="https://s3-alpha-sig.figma.com/img/929d/1086/28e016a6327502d8d10b0d529ebc154e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ag-3FjfV~q34m~dhXiIA9wvbfsJulQY2IaCboTdZxShTdVIXQ2cxnF2hR060sRWm1WpA1Dlj7PLfAUttpg1CaL~FoSSm~zlcOBj7hiHNvXgVHa8kkYB8VMNmUq-9g~yYFWFnbxX1ltKQvzvr-3BArEL6pusn1iZzkD8B79mJXwOrOk0~2sTIyCBbNRIjdBYUDcE~BjT~0Z28-Wts3JgoM41iP9HMOm5WcQ5ON6XiAIuOg~sQWL8SSKdW9SKNvS7GZDdboJlwRjMpy2LupIZKj-eDgBNtmO1eNy9mPI8U1XiLWcouq2U6Bp20zAgI0PPtzX4L16D2qFWejlIhQjRSsQ__" />
              <div className={styles.label}>
                <Badge
                  text={challenge.category}
                  className={`${styles['badge-text']} flex-center`}
                />
              </div>
              <div className={styles.info}>
                <h3>{challenge.title}</h3>
                <p className="p2">
                  {challenge.startDate} - {challenge.endDate}
                </p>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default ChallengeList;
