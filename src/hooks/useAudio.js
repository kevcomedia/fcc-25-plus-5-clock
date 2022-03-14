import { useEffect, useRef } from 'react'

const useAudio = (timeLeft) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current && timeLeft === 0) {
      audioRef.current.play()
    }
  }, [timeLeft])

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return { audioRef, resetAudio }
}

export default useAudio
