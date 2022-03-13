import Button from './Button'

const secondsToReadableTime = (seconds) => {
  const minutes = `${Math.floor(seconds / 60)}`.padStart(2, '0')
  const remainder = `${seconds % 60}`.padStart(2, '0')

  return `${minutes}:${remainder}`
}

const Timer = ({
  className,
  label,
  seconds,
  isTimerRunning,
  onStartStop,
  onReset,
}) => {
  return (
    <div className={`${className} row-span-2 bg-teal-400 py-8`}>
      <p className="text-center" id="timer-label">
        {label}
      </p>
      <p className="text-center text-5xl font-normal mb-4" id="time-left">
        {secondsToReadableTime(seconds)}
      </p>

      <div className="flex justify-center">
        <Button className="mr-2" id="start_stop" onClick={onStartStop}>
          {isTimerRunning ? 'Stop' : 'Start'}
        </Button>
        <Button id="reset" onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Timer
