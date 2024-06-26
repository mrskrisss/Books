import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { increment, decrement } from '../../redux/counter-slice'
import Plus from '../../icons/plus'
import Minus from '../../icons/minus'
import './index.scss'

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const handleClickIncrement = () => {
    dispatch(increment())
  }

  const handleClickDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div className="wrap-counter">
        <button className="btn-counter decrement" onClick={handleClickDecrement}> <Minus /> </button>
        <span className='value-counter'>{counter}</span>
        <button className="btn-counter increment " onClick={handleClickIncrement}> <Plus /> </button>
      </div>

    </>
  )
}
