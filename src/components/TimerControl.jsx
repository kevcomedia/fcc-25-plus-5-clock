import Button from './Button'

const TimerControl = ({
  className,
  name,
  label,
  value,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={className}>
      <p className="text-center" id={`${name}-label`}>
        {label}
      </p>
      <div className="flex justify-center items-center">
        <Button
          className="mr-4 p-2"
          id={`${name}-decrement`}
          onClick={onDecrement}
        >
          -
        </Button>
        <p className="mr-4 px-2" id={`${name}-length`}>
          {value}
        </p>
        <Button className="p-2" id={`${name}-increment`} onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  )
}

export default TimerControl
