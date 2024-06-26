import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchSearchBooks } from '../redux/books-slice'
import { Title } from '../components/title'
import { CardNewBook } from '../components/CardNewBook'

export const SearchResults = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { search } = useParams<{search: string}>()
  console.log(search)
  const { currentPage } = useParams<{currentPage: string}>()
  console.log(currentPage)
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)
  const pagesCount = useSelector((state: RootState) => state.books.pagesCount)

  useEffect(() => {
    console.log(search, currentPage)
    dispatch(fetchSearchBooks({ query: search, page: currentPage || '1' }))
  }, [search, currentPage, dispatch])

  function buildPaginationScheme () {
    const prevPageNumber = +currentPage - 1 // предполагаемая предыдущая страница, может получиться отрицательной
    const nextPageNumber = +currentPage + 1 // предполагаемая следующая страница, может получиться больше максимальной
    const scheme = [1, prevPageNumber, +currentPage, nextPageNumber, pagesCount] // строим схему
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCount) // чистим те, которые меньше 0 или больше pagesCounter
    const set = new Set(filteredScheme) // удаляем дубли
    const result = Array.from(set) // обратно приводим к массиву

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...') // если между первым и вторым элементом пропуск, вставляем ...
    if (result.at(-2) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...') // если между последним и предпоследним пропуск, вставляем ...

    return result
  }

  function renderBooks () {
    if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return books?.map(book => <CardNewBook key={book.isbn13} isbn13={book.isbn13} name={book.name} message={book.message} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} />)
  }

  function renderPagination () {
    if (!pagesCount) return null

    const paginationScheme = buildPaginationScheme()

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
        {renderPagination()}
      </div>
    </>
  )
}
