import { useEffect, useState } from "react";

export default function Timer({ stop }: any) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);
  let timer: any;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
    }, 1000);
    if (sec == 59) {
      setMin(min + 1);
      setSec(0);
    }
    if (min == 59 && sec == 59) {
      setHours(hours + 1);
      setMin(0);
    }
    if (stop) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  });

  return (
    <h1 className="text-white text-3xl mb-3">
      {hours == 0 ? null : hours >= 10 ? hours : "0" + hours + ":"}
      {min >= 10 ? min : "0" + min}:{sec >= 10 ? sec : "0" + sec}
    </h1>
  );
}
