import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchBooks } from '../redux/books-slice'
import { CardFavorite } from '../components/cardFavorite'
import { Title } from '../components/title'

export const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectFavoriteBooks = (state: RootState) =>
    state.books.list.filter((book) => book.isFavorite === true)
  // const selectFavoriteBooks = createSelector(
  //   (state: RootState) => state.book.item, (books) => {
  //     console.log(books)
  //     const typedBooks = books as IBookPreview
  //     return console.log(Object.values(typedBooks).filter((book) => book.isFavorite === true))
  //   }
  // )
  // const favoriteBooks = useSelector(selectFavoriteBooks)
  // console.log(favoriteBooks)
  const books = useSelector(selectFavoriteBooks)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    if (books.length > 0) return
    console.log(books)
    dispatch(fetchBooks())
  }, [dispatch])

  const renderBooks = () => {
    if (!Array.isArray(books)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{books?.map((book) => <CardFavorite key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
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
