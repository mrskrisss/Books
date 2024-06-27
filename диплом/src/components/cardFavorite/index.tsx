import { useFavorite } from '../../hooks/useFavorites'
import { ICardBook } from '../../types/ICardBook'
import Heart from '../../icons/heart'
import './index.scss'

export const CardFavorite = (props: ICardBook) => {
  const { removeFromFavorite, checkFavorite } = useFavorite()

  const handleClickRemoveFromFavorite = (isbn13) => {
    removeFromFavorite(props)
  }

  return (
    <div className="wrapper-card-favorite">
        <div className="wrap-img-favorite">
            <img className="img-favorite" src={props.image} />
        </div>
        <div className="card-information-favorite">
            <div className="card-name-favorite">
                <p className="name-book-favorite">{props.title}</p>
            </div>
            <div className="card-description-favorite">
                <p className="author-and-year-favorite">{props.subtitle}</p>
            </div>
            <div className="card-price-favorite">
                <p className="price-favorite">{props.price}</p>
            </div>
        </div>
        <button className="button-like" onClick={() => { handleClickRemoveFromFavorite(props.isbn13) }}>
            <Heart fill={checkFavorite(props.isbn13) ? '#FC857F' : 'currentColor' } />
        </button>
    </div>
  )
}
