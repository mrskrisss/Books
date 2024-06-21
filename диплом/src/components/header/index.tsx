import React from 'react'
// import useLocalStorageState from 'use-local-storage-state'
import Heart from '../../icons/heart'
import Search from '../../icons/search'
import { CartWidget } from '../cartWidget'
// import { IBookPreview } from '../../types/ICardPreview'
import './index.scss'

export const Header: React.FC = () => {
  // const [cart] = useLocalStorageState<IBookPreview>('cart', {})

  // const booksCount: number = Object.keys(cart || {}).length

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
              <CartWidget />
          </div>
        </div>
      </div>
    </header>
  )
}
