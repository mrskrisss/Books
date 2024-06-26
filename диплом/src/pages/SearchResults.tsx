import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchSearchBooks } from '../redux/books-slice'
import { CardNewBook } from '../components/CardNewBook'
import { buildPaginationScheme } from '../utils/buildPaginationScheme'
import { Title } from '../components/title'
import './SearchResults.scss'

export const SearchResults = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { search } = useParams<{search: string}>()
  const { currentPage } = useParams<{currentPage: string}>()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)
  const pagesCount = useSelector((state: RootState) => state.books.pagesCount)

  useEffect(() => {
    dispatch(fetchSearchBooks({ query: search, page: currentPage || '1' }))
  }, [search, currentPage, dispatch])

  function renderBooks () {
    if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return books?.map(book => <CardNewBook key={book.isbn13} isbn13={book.isbn13} name={book.name} message={book.message} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} />)
  }

  function renderPagination () {
    if (!pagesCount) return null

    const paginationScheme = buildPaginationScheme(currentPage, pagesCount)

    return (
      <ul className="pagination">
        {paginationScheme.map((item, index) => {
          if (item === '...') {
            return (
              <li className="page-item" key={index}>
                <span className="page-link">...</span>
              </li>
            )
          }

          return (
            <li className="page-item" key={index}>
              <NavLink className="page-link" to={`/search/${search}/${item}`}>
                {item}
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <Title>«{search}» Search results</Title>
      <div className="wrapper-cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {renderBooks()}
      </div>
      <div className="wrapper-pagination">
        {renderPagination()}
      </div>
    </>
  )
}
