import React from 'react';
import { useEffect, useState, useRef } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stopTime();
    };
  }, []);

  const stopTime = () => {
    clearInterval(intervalId.current);
  };

  return <div>{time.toLocaleTimeString()}</div>;
}
