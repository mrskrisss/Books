import { useEffect } from 'react'
import { fetchBooks } from '../redux/books-slice'
import { CardNewBook } from '../components/CardNewBook'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Title } from '../components/title'

export function ListNewBooks () {
  const dispatch = useDispatch<AppDispatch>()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  const renderBooks = () => {
    if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{books?.map((book) => <CardNewBook key={book.isbn13} isbn13={book.isbn13} url={book.url} name={book.name} message={book.message} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price}/>)}</>
  }

  return (
    <>
      <Title>New Releases Books</Title>
      <div className="wrapper-cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {renderBooks()}
      </div>
    </>
  )
}
