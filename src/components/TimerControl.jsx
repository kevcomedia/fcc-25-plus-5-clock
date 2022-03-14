import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
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
          className="mr-4"
          id={`${name}-decrement`}
          label="Decrease"
          icon={faMinus}
          onClick={onDecrement}
        />
        <p className="mr-4 px-2" id={`${name}-length`}>
          {value}
        </p>
        <Button
          id={`${name}-increment`}
          label="Increase"
          icon={faPlus}
          onClick={onIncrement}
        />
      </div>
    </div>
  )
}

export default TimerControl
