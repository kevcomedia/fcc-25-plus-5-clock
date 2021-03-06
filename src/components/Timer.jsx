import {
  faPlay,
  faPause,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons'
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
  const colorClasses = isTimerRunning ? 'bg-rose-400' : 'bg-teal-400'

  return (
    <div className={`${className} ${colorClasses} row-span-2 py-8`}>
      <p className="text-center" id="timer-label">
        {label}
      </p>
      <p className="text-center text-5xl font-normal mb-4" id="time-left">
        {secondsToReadableTime(seconds)}
      </p>

      <div className="flex justify-center">
        <Button
          className="mr-2"
          id="start_stop"
          label={isTimerRunning ? 'Stop' : 'Start'}
          icon={isTimerRunning ? faPause : faPlay}
          onClick={onStartStop}
        />
        <Button
          id="reset"
          label="Reset"
          icon={faRotateLeft}
          onClick={onReset}
        />
      </div>
    </div>
  )
}

export default Timer
