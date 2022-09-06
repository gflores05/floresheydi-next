import { useEffect, useState } from 'react'

export const useWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [dimensions])

    return dimensions
  }
  return { width: 0, height: 0 }
}
