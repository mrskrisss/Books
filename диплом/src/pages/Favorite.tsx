import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchBooks } from '../redux/books-slice'
import { CardFavorite } from '../components/cardFavorite'
import { Title } from '../components/title'
import { IBookPreview } from '../types/ICardPreview'

export const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>()
  const book = useSelector((state: RootState) => {
    const books = Object.values(state.book.item) as IBookPreview[]
    return books.filter((book: { isFavorite: boolean }) => book.isFavorite)
  })
  console.log(book)
  // const book = useSelector((state: RootState) => state.book.item.filter(item => item.isFavorite))
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    if (book.length > 0) return

    dispatch(fetchBooks())
  }, [dispatch])

  const renderBooks = () => {
    // if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{book?.map((book) => <CardFavorite key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
  }

  return (
    <>
      <Title>Favorites</Title>
      <div className="wrapper-cards" >
        {renderBooks()}
      </div>
    </>
  )
}
