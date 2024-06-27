import { useState, useEffect } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { ICardBook } from '../../types/ICardBook'
import Minus from '../../icons/minus'
import Plus from '../../icons/plus'
import './index.scss'

export const Counter = (props: ICardBook) => {
  const { getCounter, incrementCounter, decrementCounter } = useCounter(props)
  const [counters, setCounters] = useState(getCounter())

  useEffect(() => {
    setCounters(getCounter())
  }, [])

  const handleClickIncrement = (isbn13) => {
    incrementCounter(props)
  }

  const handleClickDecrement = (isbn13) => {
    decrementCounter(props)
  }

  return (
    <div>
      <button className="btn-counter decrement" onClick={handleClickDecrement}>
        <Minus />
      </button>
      <span className='value-counter'>{getCounter()}</span>
      <button className="btn-counter increment" onClick={handleClickIncrement}>
        <Plus />
      </button>
    </div>
  )
}
