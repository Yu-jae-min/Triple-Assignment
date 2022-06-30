import { useEffect, useRef, useState } from 'react'

const useCounter = (maxCount: number) => {
  const [count, setCount] = useState(0)
  const ref = useRef(0)

  const countEasingOut = (progressRate: number) => {
    const remainder = Math.pow(2, -10 * progressRate)
    const maxProgress = 1

    if (progressRate === maxProgress) {
      return maxProgress
    } else {
      return maxProgress - remainder
    }
  }

  useEffect(() => {
    const onCount = () => {
      const duration = 2000
      const frameTimeout = 1000 / 60
      const totalFrame = Math.round(duration / frameTimeout)
      const percentage = countEasingOut(ref.current / totalFrame)
      const currentCount = Math.round(maxCount * percentage)

      setCount(currentCount)

      ref.current = ref.current += 1
      const counting = requestAnimationFrame(onCount)

      if (maxCount === currentCount) {
        cancelAnimationFrame(counting)
      }
    }

    const counting = requestAnimationFrame(onCount)

    return () => {
      cancelAnimationFrame(counting)
    }
  }, [maxCount])

  return count
}

export default useCounter
