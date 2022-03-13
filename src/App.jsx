import { useState } from 'react'
import Timer from './components/Timer'
import TimerControl from './components/TimerControl'

const App = () => {
  const [isTimerRunning, setTimerRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60 /* seconds */)
  const [breakLength, setBreakLength] = useState(5 /* minutes */)
  const [sessionLength, setSessionLength] = useState(25 /* minutes */)

  const handleTimerRunningToggle = () => {
    setTimerRunning(!isTimerRunning)
  }

  return (
    <div className="m-16 grid grid-cols-2 grid-rows-2 max-w-md text-white font-bold bg-teal-500 border-8 border-teal-500 rounded-md drop-shadow-xl">
      <Timer
        className="row-span-2"
        label="Session"
        seconds={timeLeft}
        isTimerRunning={isTimerRunning}
        onStartStop={handleTimerRunningToggle}
      />
      <TimerControl
        className="self-center"
        name="break"
        label="Break Length"
        value={breakLength}
      />
      <TimerControl
        className="self-center"
        name="session"
        label="Session Length"
        value={sessionLength}
      />
    </div>
  )
}

export default App
