import ChallengeHeader from '@/components/challenge/ChallengeHeader';

import styles from './Challenge.module.css';
import ChallengeFilter from '@/components/challenge/ChallengeFilter';
import ChallengeList from '@/components/challenge/ChallengeList';

const Challenge = () => {
  return (
    <div>
      <ChallengeHeader />
      <div className={styles['body-container']}>
        <ChallengeFilter />
        <ChallengeList />
      </div>
    </div>
  );
};

export default Challenge;
