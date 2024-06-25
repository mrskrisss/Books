import { ICardBook } from '../../types/ICardBook'
import { Link } from 'react-router-dom'
import './index.scss'

export const CardNewBook = (props: ICardBook) => {
  return (
    <div className="wrapper-card" id={props.isbn13}>
        <Link to={`/books/${props.isbn13}`}>
            <div className="wrap-img">
                <img className="img" src={props.image} />
            </div>
            <div className="card-name">
                <p className="name-book">{props.title}</p>
            </div>
            <div className="card-description">
                <p className="author-and-year">{props.subtitle}</p>
            </div>
            <div className="card-price">
                <p className="price">{props.price}</p>
            </div>
        </Link>
    </div>
  )
}
