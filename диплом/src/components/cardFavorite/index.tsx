import React from 'react'
import Heart from '../../icons/heart'
import './index.scss'

export const CardFavorite: React.FC = () => {
  return (
    <div className="wrapper-card-favorite">
        <div className="wrap-img-favorite">
            <img className="img-favorite" src="#" />
        </div>
        <div className="card-information-favorite">
            <div className="card-name-favorite">
                <p className="name-book-favorite">Android Apps for Absolute Beginners, 2nd Edition </p>
            </div>
            <div className="card-description-favorite">
                <p className="author-and-year-favorite">by Lentin Joseph,  Apress 2018</p>
            </div>
            <div className="card-price-favorite">
                <p className="price-favorite">$31.38</p>
            </div>
        </div>
        <div className="button-like">
            <Heart />
        </div>
    </div>
  )
}
