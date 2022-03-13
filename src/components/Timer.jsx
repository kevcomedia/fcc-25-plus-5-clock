import Button from './Button'

const secondsToReadableTime = (seconds) => {
  const minutes = `${Math.floor(seconds / 60)}`.padStart(2, '0')
  const remainder = `${seconds % 60}`.padStart(2, '0')

  return `${minutes}:${remainder}`
}

const Timer = ({ className, label, seconds }) => {
  return (
    <div className={`${className} row-span-2 bg-teal-400 py-8`}>
      <p className="text-center">{label}</p>
      <p className="text-center text-5xl font-normal mb-4">
        {secondsToReadableTime(seconds)}
      </p>

      <div className="flex justify-center">
        <Button className="mr-2">Start</Button>
        <Button>Reset</Button>
      </div>
    </div>
  )
}

export default Timer
