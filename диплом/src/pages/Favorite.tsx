import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useFavorite } from '../hooks/useFavorites'
import { CardFavorite } from '../components/cardFavorite'
import { Title } from '../components/title'
import { BackButton } from '../components/backButton'

export const Favorite = () => {
  const { getFavorite } = useFavorite()
  const [state, setState] = useState(getFavorite())
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    setState(getFavorite())
  }, [])

  const renderBooks = () => {
    if (!Array.isArray(state)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{state?.map((book) => <CardFavorite key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
  }

  return (
    <>
      <div className="button-back">
        <BackButton />
      </div>
      <Title>Favorites</Title>
      <div className="wrapper-cards" style={{ padding: '10px', height: '72vh' }}>
        {renderBooks()}
      </div>
    </>
  )
}
