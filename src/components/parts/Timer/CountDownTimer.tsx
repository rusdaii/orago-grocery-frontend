'use client';
import { useCountDown } from '@/hooks/useCountDown';

import ShowCounter from './ShowCounter';

type CountDownTimerProps = {
  targetDate: number;
};

const CountDownTimer = ({ targetDate }: CountDownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} />;
  }

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountDownTimer;
