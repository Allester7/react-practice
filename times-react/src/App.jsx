import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Time from "./Time";
import ShowTime from "./ShowTime";
function App() {
  //state
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeArray, setTimeArray] = useState(new Array(4).fill(0));
  const [showClock, setShowClock] = useState(true);
  //variable
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  var isDisabled = true;
  const intervalRef = useRef(null);

  //useEffect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (seconds == 0 && minutes > 1) {
        setMinutes((prevMin) => prevMin - 1);
        setSeconds(59);
      } else if (seconds > 0) {
        setSeconds((prevSec) => prevSec - 1);
      }
      if (minutes == 0 && seconds == 0) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
        setTimeArray([0, 0, 0, 0]);
        setShowClock(true);
      }
    }, 1000);
    return () => clearTimeout(intervalRef.current);
  }, [minutes, seconds]);

  const handleReset = () => {
    setTimeArray([0, 0, 0, 0]);
    setMinutes(0);
    setSeconds(0);
    setShowClock(true);
    isDisabled = true;
  };

  const handleStart = () => {
    if (isDisabled) {
      setShowClock(false);
      setMinutes(timeArray[0] * 10 + timeArray[1]);
      setSeconds(timeArray[2] * 10 + timeArray[3]);
      if (seconds == 0 && minutes > 1) {
        setMinutes((prevMin) => prevMin - 1);
        setSeconds(59);
      } else if (seconds > 0) {
        setSeconds((prevSec) => prevSec - 1);
      }
      if (minutes == 0 && seconds == 0) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
      isDisabled = false;
    }
  };

  const handleStop = () => {
    isDisabled = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const handleclock = (time, index) => {
    const updatedTimes = [...timeArray];
    updatedTimes[index] = time;
    setTimeArray(updatedTimes);
  };
  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="clock">
        {showClock ? (
          timeArray.map((time, index) => {
            if (index == 2) {
              (":");
            }
            return (
              <Time
                key={index}
                time={time}
                handleClock={handleclock}
                index={index}
                inputRef={inputRefs[index]} // Pass the current ref
                nextRef={inputRefs[index + 1]}
              />
            );
          })
        ) : (
          <ShowTime min={minutes} sec={seconds} />
        )}
      </div>

      <div className="btn-container">
        <button type="button" className="btn start" onClick={handleStart}>
          Start
        </button>
        <button className="btn stop" onClick={handleStop}>
          Stop
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
