import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchSearchBooks } from '../redux/books-slice'
import { Title } from '../components/title'
import { CardNewBook } from '../components/CardNewBook'

export const SearchResults = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { search } = useParams<{search: string}>()
  const books = useSelector((state: RootState) => state.books.list)
  console.log(books)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchSearchBooks({ query: search }))
  }, [search, dispatch])

  function renderBooks () {
    if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return books?.map(book => <CardNewBook key={book.isbn13} isbn13={book.isbn13} query={book.query} url={book.url} name={book.name} message={book.message} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} />)
  }

  return (
    <>
        <Title>«{search}» Search results</Title>
        <div className="wrapper-cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {renderBooks()}
      </div>
    </>
  )
}
