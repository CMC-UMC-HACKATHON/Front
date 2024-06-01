import { useState } from 'react';
import styles from './ChallengeFilter.module.css';
import { Button } from '@/components/ui/Button';

const ChallengeFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'latest' | 'best'>(
    'latest'
  );

  return (
    <div className={styles.container}>
      <Button
        size="sm"
        variant={selectedFilter === 'latest' ? 'primary' : 'secondary'}
        type="button"
        className={`flex-center ${styles.filter}`}
        onClick={() => setSelectedFilter('latest')}
      >
        <h4>최신순</h4>
      </Button>
      <Button
        size="sm"
        variant={selectedFilter === 'best' ? 'primary' : 'secondary'}
        type="button"
        className={`flex-center ${styles.filter}`}
        onClick={() => setSelectedFilter('best')}
      >
        <h4>인기순</h4>
      </Button>
    </div>
  );
};

export default ChallengeFilter;
