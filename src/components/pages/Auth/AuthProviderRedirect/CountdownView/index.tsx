import { FC } from 'react';

import { useCountDown } from '@/hooks/useCountDown';

type CountDownViewProps = {
  message: string;
  onEnd: () => void;
};

const CountDownView: FC<CountDownViewProps> = ({ message, onEnd }) => {
  const remain = useCountDown(5, onEnd);

  return (
    <div className="text-center">
      <span>{message}</span>
      <p>Redirecting in {remain} seconds...</p>
    </div>
  );
};

export default CountDownView;
