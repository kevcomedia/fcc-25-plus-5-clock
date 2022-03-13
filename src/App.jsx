import { useState, useEffect } from 'react'
import Timer from './components/Timer'
import TimerControl from './components/TimerControl'

const initialValues = {
  timeLeft: 25 * 60 /* seconds */,
  breakLength: 5 /* minutes */,
  sessionLength: 25 /* minutes */,
}

const App = () => {
  const [isTimerRunning, setTimerRunning] = useState(false)
  const [timerType, setTimerType] = useState('Session')
  const [timeLeft, setTimeLeft] = useState(initialValues.timeLeft)
  const [breakLength, setBreakLength] = useState(initialValues.breakLength)
  const [sessionLength, setSessionLength] = useState(
    initialValues.sessionLength
  )

  useEffect(() => {
    if (timeLeft === 0) {
      if (timerType === 'Session') {
        setTimeLeft(breakLength * 60)
        setTimerType('Break')
      } else {
        setTimeLeft(sessionLength * 60)
        setTimerType('Session')
      }
    }
  }, [timeLeft, timerType, breakLength, sessionLength])

  useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setTimeLeft((v) => v - 1)
      }, 200) // TODO change temporary value back to 1000
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [isTimerRunning])

  const handleTimerRunningToggle = () => {
    setTimerRunning(!isTimerRunning)
  }

  const handleReset = () => {
    setTimerRunning(false)
    setTimerType('Session')
    setTimeLeft(initialValues.timeLeft)
    setBreakLength(initialValues.breakLength)
    setSessionLength(initialValues.sessionLength)
  }

  return (
    <div className="m-16 grid grid-cols-2 grid-rows-2 max-w-md text-white font-bold bg-teal-500 border-8 border-teal-500 rounded-md drop-shadow-xl">
      <Timer
        className="row-span-2"
        label={timerType}
        seconds={timeLeft}
        isTimerRunning={isTimerRunning}
        onStartStop={handleTimerRunningToggle}
        onReset={handleReset}
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
