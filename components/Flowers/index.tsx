import { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import { useWindowDimensions } from '@hooks/dimensions-hook'
import styles from './Flowers.module.css'

const INIT = -192
const INCREMENT = 100
const INTERVAL = 1000
const ITEM_HEIGHT = 96

const flowers = [
  {
    id: 1,
    image: 'flower1',
  },
  {
    id: 2,
    image: 'flower2',
  },
  {
    id: 3,
    image: 'flower3',
  },
  {
    id: 4,
    image: 'flower4',
  },
  {
    id: 5,
    image: 'flower5',
  },
  {
    id: 6,
    image: 'flower1',
  },
  {
    id: 7,
    image: 'flower2',
  },
  {
    id: 8,
    image: 'flower3',
  },
  {
    id: 9,
    image: 'flower4',
  },
  {
    id: 10,
    image: 'flower5',
  },
]

function generateRandom(start: number, end: number) {
  return Math.floor(Math.random() * end) + start
}

export default function Flowers() {
  const dimensions = useWindowDimensions()

  return (
    <>
      {flowers.map((item) => {
        const left = generateRandom(0, dimensions.width - 96)
        return (
          <Flower
            image={item.image}
            key={item.id}
            left={left}
            limit={dimensions.height}
          ></Flower>
        )
      })}
    </>
  )
}

interface AnimationState {
  top: number
  transition: string
}

const getAnimation = (animation: AnimationState, limit: number) => {
  if (animation.top <= INIT) {
    return {
      transition: 'top 1s linear',
      top: animation.top + INCREMENT,
    }
  }

  if (animation.top >= limit + ITEM_HEIGHT) {
    const initPos = generateRandom(-196, -500)
    return {
      top: initPos,
      transition: 'none',
    }
  }

  return {
    ...animation,
    top: animation.top + INCREMENT,
  }
}

interface FlowerProps {
  image: string
  left: number
  limit: number
}

const Flower = ({ image, left, limit }: FlowerProps) => {
  const [animation, setAnimation] = useState<AnimationState>({
    top: generateRandom(-196, -500),
    transition: 'top 1s linear',
  })

  const [start, setStart] = useState(false)
  const [run, setRun] = useState(false)

  useEffect(() => {
    setAnimation((a) => getAnimation(a, limit))

    setTimeout(() => setRun(!run), INTERVAL)
  }, [run, limit])

  useEffect(() => {
    if (!start) {
      setRun(true)
      setStart(true)
    }
  }, [start])

  return (
    <div
      className={cx(styles.flower, styles[image])}
      style={{
        transition: animation.transition,
        left: `${left}px`,
        top: `${animation.top}px`,
      }}
    ></div>
  )
}
