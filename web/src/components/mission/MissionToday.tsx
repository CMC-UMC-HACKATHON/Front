import { useState } from 'react';
import { Button } from '../ui/Button';
import { CheckOutlineIcon, CheckedIcon } from '../ui/Icons';
import styles from './MissionToday.module.css';

const MissionToday = ({ list }: { list: MissionType[] }) => {
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const handleCheck = (index: number) => {
    setCheckedList((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className={styles.container}>
      <h2>오늘의 미션</h2>
      <div className={styles['mission-list']}>
        {list && list.length > 0
          ? list.map((_, index) => (
              <div key={index} className={styles['mission-item']}>
                <div className={styles['mission-title']}>
                  <div onClick={() => handleCheck(index)}>
                    {checkedList.includes(index) ? (
                      <CheckedIcon />
                    ) : (
                      <CheckOutlineIcon />
                    )}
                  </div>
                  <p className="p3">독서하고 감상문 작성하기</p>
                </div>
                {checkedList.includes(index) ? null : (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="flex-center"
                  >
                    <p className="p2">미션하기</p>
                  </Button>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MissionToday;
