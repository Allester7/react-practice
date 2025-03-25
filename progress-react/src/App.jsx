
import { useEffect } from "react";
import { useState } from "react"

function App() {
  const[progress, setProgress] = useState(0);
  const[percentage, setPercentage] = useState(progress);
  const handleStart = () => {

      setInterval(()=> {
        setProgress(prevProgress => prevProgress +1)
      },100)
  
    
  }
  const handleReset = () => {
    setProgress(0);
    setPercentage(0);
  }
  useEffect(()=>{
    setPercentage(Math.min(100,Math.max(progress,0)));
  },[progress])
  return (
      <div className="progress-bar-container">
        <h1>Progress Bar</h1>
        <div className="progress-bar">
            <span style={{
              color : percentage > 49 ? 'white' : 'black',
            }}>{percentage}%</span>
            <div style={
              {
                width:`${percentage}%`
              }
            }>
            </div>
        </div>
        <div className="button">
          <button className="btn start" onClick={handleStart}>
            Start
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
          
        </div>
      </div>
  )
}

export default App
