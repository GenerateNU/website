import React, { useState, useEffect, useRef } from "react";

export default function NumberTickerAnimation({ targetNumber, tickRate }) {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          setNumber((prevNumber) => {
            if (prevNumber >= targetNumber) {
              clearInterval(interval);
              return targetNumber;
            }
            return prevNumber + 1;
          });
        }, tickRate);
        return () => clearInterval(interval);
      }
    });
    observer.observe(numberRef.current);
    return () => observer.unobserve(numberRef.current);
  }, [targetNumber]);

  return <p ref={numberRef}>{number}</p>;
}
