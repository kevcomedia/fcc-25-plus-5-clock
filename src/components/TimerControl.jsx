import Button from './Button'

const TimerControl = ({ className, name, label, value }) => {
  return (
    <div className={className}>
      <p className="text-center" id={`${name}-label`}>
        {label}
      </p>
      <div className="flex justify-center items-center">
        <Button className="mr-4 p-2" id={`${name}-decrement`}>
          -
        </Button>
        <p className="mr-4 px-2" id={`${name}-length`}>
          {value}
        </p>
        <Button className="p-2" id={`${name}-increment`}>
          +
        </Button>
      </div>
    </div>
  )
}

export default TimerControl
