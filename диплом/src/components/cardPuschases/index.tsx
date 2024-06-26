import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { usePurchases } from '../../hooks/usePurchases'
import { ICardBook } from '../../types/ICardBook'
import { toggleFavoriteById } from '../../redux/book-slice'
import { Counter } from '../counter'
import Close from '../../icons/close'
import './index.scss'

export const CardPurchases = (props: ICardBook) => {
  const dispatch = useDispatch<AppDispatch>()
  const { removeFromPurchases } = usePurchases()

  const handleClickRemoveFromPurchases = (isbn13) => {
    console.log(isbn13)
    removeFromPurchases(props)
    dispatch(toggleFavoriteById(isbn13))
  }
  return (
    <div className="wrapper-card-favorite">
        <div className="wrap-img-favorite">
            <img className="img-favorite" src={props.image} />
        </div>
        <div className="card-information-favorite">
            <div className="field-card-left">
                <div className="card-name-favorite">
                    <p className="name-book-favorite">{props.title}</p>
                </div>
                <div className="card-description-favorite">
                    <p className="author-and-year-favorite">{props.subtitle}</p>
                </div>
                <div className="card-counter">
                    <Counter />
                </div>
            </div>
            <div className="field-card-right">
                <div className="card-price-favorite">
                    <p className="price-favorite">{props.price}</p>
                </div>
                <button className="button-close" onClick={() => { handleClickRemoveFromPurchases(props.isbn13) }}>
                    <Close />
                </button>
            </div>
        </div>
    </div>
  )
}
