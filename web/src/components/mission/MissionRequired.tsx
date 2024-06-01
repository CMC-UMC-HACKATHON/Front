import { Button } from '../ui/Button';
import { ArrowRight, PhotoIcon } from '../ui/Icons';
import styles from './MissionRequired.module.css';

const MissionRequired = () => {
  return (
    <div className={styles.container}>
      <h2>필수 미션</h2>
      <Button
        variant="secondary"
        size="lg"
        type="button"
        className={styles.card}
      >
        <div className={styles.photo}>
          <PhotoIcon />
          <p className="p2">스크린샷 인증하기</p>
        </div>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default MissionRequired;
