import { useEffect, useState } from 'react';
import styles from './ChallengeFilter.module.css';
import { Button } from '@/components/ui/Button';
import { useSearchParams } from 'react-router-dom';

const ChallengeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy');

  useEffect(() => {
    if (!sortBy) {
      setSearchParams({ sortBy: 'LATEST' });
    }
  }, [sortBy]);

  return (
    <div className={styles.container}>
      <Button
        size="sm"
        variant={sortBy === 'LATEST' ? 'primary' : 'secondary'}
        type="button"
        className={`flex-center ${styles.filter}`}
        onClick={() => setSearchParams({ sortBy: 'LATEST' })}
      >
        <h4>최신순</h4>
      </Button>
      <Button
        size="sm"
        variant={sortBy === 'POPULAR' ? 'primary' : 'secondary'}
        type="button"
        className={`flex-center ${styles.filter}`}
        onClick={() => setSearchParams({ sortBy: 'POPULAR' })}
      >
        <h4>인기순</h4>
      </Button>
    </div>
  );
};

export default ChallengeFilter;
