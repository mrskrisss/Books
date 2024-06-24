import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchBooks } from '../redux/books-slice'
import { CardFavorite } from '../components/cardFavorite'
import { Title } from '../components/title'
import { useFavorite } from '../hooks/useFavorite'

export const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>()
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    if (state) return
    console.log(state)
    dispatch(fetchBooks())
  }, [dispatch])

  const renderBooks = () => {
    if (!Array.isArray(state)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{state?.map((book) => <CardFavorite key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
  }
  const { state } = useFavorite()

  return (
    <>
      <Title>Favorites</Title>
      <div className="wrapper-cards" style={{ padding: '10px' }}>
        {renderBooks()}
      </div>
    </>
  )
}
