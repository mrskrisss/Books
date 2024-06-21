import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { IBooksCount } from '../../types/IBooksCount'
import Basket from '../../icons/basket'
import './index.scss'
// export function CardPreview (props: IBookPreview)
export const CartWidget: FunctionComponent<IBooksCount> = ({ booksCount }) => {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <button className="wrap-cart-widget" onClick={navigateToCart}>
      <span className="books-counter">{booksCount}</span>
      <Basket />
    </button>
  )
}
