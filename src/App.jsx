import { useState, useEffect } from 'react'
import Timer from './components/Timer'
import TimerControl from './components/TimerControl'

const initialValues = {
  timeLeft: 25 * 60 /* seconds */,
  breakLength: 5 /* minutes */,
  sessionLength: 25 /* minutes */,
}

const timerTypes = {
  break: 'Break',
  session: 'Session',
}

const App = () => {
  const [isTimerRunning, setTimerRunning] = useState(false)
  const [timerType, setTimerType] = useState(timerTypes.session)
  const [timeLeft, setTimeLeft] = useState(initialValues.timeLeft)
  const [breakLength, setBreakLength] = useState(initialValues.breakLength)
  const [sessionLength, setSessionLength] = useState(
    initialValues.sessionLength
  )

  useEffect(() => {
    if (timeLeft === 0) {
      if (timerType === timerTypes.session) {
        setTimeLeft(breakLength * 60)
        setTimerType(timerTypes.break)
      } else {
        setTimeLeft(sessionLength * 60)
        setTimerType(timerTypes.session)
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

  useEffect(() => {
    if (timerType === timerTypes.break) {
      setTimeLeft(breakLength * 60)
    } else {
      setTimeLeft(sessionLength * 60)
    }
  }, [timerType, breakLength, sessionLength])

  const handleTimerRunningToggle = () => {
    setTimerRunning(!isTimerRunning)
  }

  const changeLength = (fn) => (setter) => () => !isTimerRunning && setter(fn)
  const decrement = changeLength((v) => (v > 1 ? v - 1 : v))
  const increment = changeLength((v) => (v < 60 ? v + 1 : v))

  const handleReset = () => {
    setTimerRunning(false)
    setTimerType(timerTypes.session)
    setTimeLeft(initialValues.timeLeft)
    setBreakLength(initialValues.breakLength)
    setSessionLength(initialValues.sessionLength)
  }

  const colorClasses = isTimerRunning
    ? 'bg-rose-500 border-rose-500'
    : 'bg-teal-500 border-teal-500'

  return (
    <div
      className={`${colorClasses} m-16 grid grid-cols-2 grid-rows-2 max-w-md text-white font-bold border-8 rounded-md drop-shadow-xl`}
    >
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
        onDecrement={decrement(setBreakLength)}
        onIncrement={increment(setBreakLength)}
      />
      <TimerControl
        className="self-center"
        name="session"
        label="Session Length"
        value={sessionLength}
        onDecrement={decrement(setSessionLength)}
        onIncrement={increment(setSessionLength)}
      />
    </div>
  )
}

export default App
