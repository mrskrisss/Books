import React from 'react'
import Heart from '../../icons/heart'
import Basket from '../../icons/basket'
import Search from '../../icons/search'
import './index.scss'

export const Header: React.FC = () => {
  return (
    <header className="nav">
      <div className="nav-container">
        <div className="container-logo">
          <span className="logo">BOOKSTORE</span>
        </div>
        <div className="container-search">
          {/* <SearchForm /> */}
          <Search />
        </div>
        <div className="nav-links">
          <div className="wrapper-heart">
              <Heart />
          </div>
          <div className="wrapper-basket">
              <Basket />
          </div>
        </div>
      </div>
    </header>
  )
}
