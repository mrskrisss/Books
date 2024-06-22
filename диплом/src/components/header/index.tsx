import React from 'react'
import Heart from '../../icons/heart'
import Search from '../../icons/search'
import { CartWidget } from '../cartWidget'
import { NavLink } from 'react-router-dom'
// import { IBookPreview } from '../../types/ICardPreview'
import './index.scss'

export const Header: React.FC = () => {
  // const [cart] = useLocalStorageState<IBookPreview>('cart', {})

  // const booksCount: number = Object.keys(cart || {}).length
  const navLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

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
          <NavLink className={navLinkClass} to="/favorite">
            <div className="wrapper-heart">
                <Heart />
            </div>
          </NavLink>
          <div className="wrapper-basket">
              <CartWidget />
          </div>
        </div>
      </div>
    </header>
  )
}
