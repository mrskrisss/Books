import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useCounter } from '../../hooks/useCounter'
import { AppDispatch } from '../../redux/store'
import { ICardBook } from '../../types/ICardBook'
import { incrementPurchases, decrementPurchases } from '../../redux/book-slice'
import Minus from '../../icons/minus'
import Plus from '../../icons/plus'
import './index.scss'

export const Counter = (props: ICardBook) => {
  const dispatch = useDispatch<AppDispatch>()
  const { getCounter, incrementCounter, decrementCounter } = useCounter(props)
  const [counters, setCounters] = useState(getCounter())

  useEffect(() => {
    setCounters(getCounter())
  }, [])

  const handleClickIncrement = (isbn13) => {
    incrementCounter(props)
    dispatch(incrementPurchases(isbn13))
  }

  const handleClickDecrement = (isbn13) => {
    decrementCounter(props)
    dispatch(decrementPurchases(isbn13))
  }
  const getNumberOfCopies = () => {
    const numberOfCopies = getCounter()
    console.log(numberOfCopies)
    return numberOfCopies
  }
  const numberOfCopies = getCounter()
  console.log(numberOfCopies)

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
