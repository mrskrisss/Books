import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { increment, decrement } from '../../redux/counter-slice'

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
        <button className="btn-counter increment " onClick={handleClickIncrement}> + </button>
        <span>{counter}</span>
        <button className="btn-counter decrement" onClick={handleClickDecrement}> - </button>
      </div>

    </>
  )
}
