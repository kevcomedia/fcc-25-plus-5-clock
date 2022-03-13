import Button from './Button'

// TODO
const secondsToReadableTime = (seconds) => {
  return '25:00'
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
