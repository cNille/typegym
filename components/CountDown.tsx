import { useState, useEffect } from "react";

function CountDown({ startTimer }: any) {
  const [seconds, setSeconds] = useState<number>(5);

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, startTimer]);

  return <h1 className="text-center mb-2">{seconds}</h1>;
}
export default CountDown;
