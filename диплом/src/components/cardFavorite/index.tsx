import React from 'react'
import Heart from '../../icons/heart'
import { ICardBook } from '../../types/ICardBook'
import './index.scss'

export const CardFavorite: React.FC<ICardBook> = (props) => {
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
        <div className="button-like">
            <Heart />
        </div>
    </div>
  )
}
