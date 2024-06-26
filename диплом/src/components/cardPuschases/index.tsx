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
    removeFromPurchases(props)
    dispatch(toggleFavoriteById(isbn13))
  }
  return (
    <div className="wrapper-card-purchases">
        <div className="wrap-img-purchases">
            <img className="img-purchases" src={props.image} />
        </div>
        <div className="card-information-purchases">
            <div className="field-card-left">
                <div className="card-name-purchases">
                    <p className="name-book-purchases">{props.title}</p>
                </div>
                <div className="card-description-purchases">
                    <p className="author-and-year-purchases">{props.subtitle}</p>
                </div>
                <Counter key={props.isbn13} isbn13={props.isbn13} image={props.image} title={props.title} price={props.price} name={props.name} message={props.message} />
            </div>
            <div className="field-card-right">
                <div className="card-price-purchases">
                    <p className="price-purchases">{props.price}</p>
                </div>
                <button className="button-close" onClick={() => { handleClickRemoveFromPurchases(props.isbn13) }}>
                    <Close />
                </button>
            </div>
        </div>
    </div>
  )
}
