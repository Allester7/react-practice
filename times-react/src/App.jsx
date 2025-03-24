import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const[minutes, setMinutes] = useState(0);
  const[seconds, setSeconds] = useState(10);
  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
  }
  const intervalRef = useRef(null);
  console.log(intervalRef)
  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      if(seconds == 0 && minutes > 1){
        setMinutes(prevMin => prevMin-1);
        setSeconds(59);
      }
      else if(seconds > 0){
        setSeconds(prevSec => prevSec -1)
      } 
      if(minutes == 0 && seconds == 0){
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    },1000)
    return ( () => clearTimeout(intervalRef.current))
  },[minutes,seconds])
  
  console.log(intervalRef)
  const handleStart= ()=>{
    if(seconds== 0 && minutes >1){
      setMinutes(prevMin => prevMin-1);
      setSeconds(59);
    }
    else if(seconds > 0){
      setSeconds(prevSec => prevSec -1)
    } 
    if(minutes == 0 && seconds == 0){
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  }
  const handleStop = () => {
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current=null;
    }
  }
  return (
      <div className="timer">
        <h1>Timer</h1>
        input
        <p className="time">
          {minutes >= 10 ? minutes : "0"+ minutes } : {seconds >= 10 ? seconds : "0"+ seconds }
        </p>
        <div className="btn-container">
        <button className="btn start" onClick={handleStart}>Start</button>
        <button className="btn stop" onClick={handleStop}>Stop</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
      
  )
}

export default App;
