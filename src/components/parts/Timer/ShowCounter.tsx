type ShowCounterProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type DateTimeDisplayProps = {
  value: number;
  type: string;
};
const DateTimeDisplay = ({ value, type }: DateTimeDisplayProps) => {
  return (
    <div className="text-center">
      <p className="text-xl font-normal text-white">{value}</p>
      <span className="uppercase text-sm font-light text-white">{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className="flex items-start text-center gap-3">
      <DateTimeDisplay value={days} type="Days" />
      <span className="text-lg text-white">:</span>
      <DateTimeDisplay value={hours} type="Hours" />
      <span className="text-lg text-white">:</span>
      <DateTimeDisplay value={minutes} type="Mins" />
      <span className="text-lg text-white">:</span>
      <DateTimeDisplay value={seconds} type="Secs" />
    </div>
  );
};

export default ShowCounter;
