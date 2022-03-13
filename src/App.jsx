import Timer from './components/Timer'
import TimerControl from './components/TimerControl'

const App = () => {
  return (
    <div className="m-16 grid grid-cols-2 grid-rows-2 max-w-md text-white font-bold bg-teal-500 border-8 border-teal-500 rounded-md drop-shadow-xl">
      <Timer className="row-span-2" label="Session" seconds={25 * 60} />
      <TimerControl className="self-center" label="Break Length" value={5} />
      <TimerControl className="self-center" label="Session Length" value={25} />
    </div>
  )
}

export default App
