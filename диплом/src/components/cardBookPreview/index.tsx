import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { IBookPreview } from '../../types/ICardPreview'
import { toggleFavoriteById } from '../../redux/book-slice'
import Heart from '../../icons/heart'
import { useFavorite } from '../../hooks/useFavorites'
import { usePurchases } from '../../hooks/usePurchases'
import { BackButton } from '../backButton'
import './index.scss'

export const CardPreview = (props: IBookPreview) => {
  const dispatch = useDispatch<AppDispatch>()
  const { toggleFavorite, checkFavorite } = useFavorite()
  const { togglePurchases, checkPurchases } = usePurchases()

  const handleClickHeart = (isbn13) => {
    console.log(isbn13)
    toggleFavorite(props)
    dispatch(toggleFavoriteById(isbn13))
  }

  const handleClickAddToCard = (isbn13) => {
    console.log(isbn13)
    togglePurchases(props)
    dispatch(toggleFavoriteById(isbn13))
  }
  return (
    <>
        <div className="wrapper-card-preview" id={props.isbn13}>
            <div className="title-and-button">
                <div className="button-back">
                    <BackButton />
                </div>
                <div className="title-card-preview">{props.title}</div>
            </div>
            <div className="information-card-preview">
                <div className="wrap-img-card-preview">
                    <button className="wrap-heart" onClick={() => { handleClickHeart(props.isbn13) }}>
                        <Heart fill={checkFavorite(props.isbn13) ? '#FC857F' : '#313037' } />
                    </button>
                    <img className="img-card-preview" src={props.image} />
                </div>
                <div className="description-card-preview">
                    <div className="wrap-price-card-preview">
                        <p className="price-card-preview">{props.price}</p>
                    </div>
                    <div className="wrap-additional-information-card-preview">
                        <div className="wrap-info">
                            <p className="name authors">Authors</p>
                            <p className="description name-authors">{props.authors}</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name publisher">Publisher</p>
                            <p className="description name-publisher">{props.publisher}</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name language">Language</p>
                            <p className="description name-language">English</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name format">Format</p>
                            <p className="description name-format">Paper book / book (PDF)</p>
                        </div>
                        <div className="wrap-button">
                            <button className="button-add-cart" onClick={() => { handleClickAddToCard(props.isbn13) }}>ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-book">
                <p className="text-book">{props.desc}</p>
            </div>
        </div>
    </>
  )
}
