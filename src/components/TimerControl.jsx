import Button from './Button'

const TimerControl = ({ className, label, value }) => {
  return (
    <div className={className}>
      <p className="text-center">{label}</p>
      <div className="flex justify-center items-center">
        <Button className="mr-4 p-2">-</Button>
        <p className="mr-4 px-2">{value}</p>
        <Button className="p-2">+</Button>
      </div>
    </div>
  )
}

export default TimerControl
