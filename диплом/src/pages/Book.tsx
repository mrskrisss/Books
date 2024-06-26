import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchBook } from '../redux/book-slice'
import { CardPreview } from '../components/cardBookPreview'

export function Book () {
  const { bookId } = useParams<{bookId: string}>()
  const dispatch = useDispatch<AppDispatch>()
  const book = useSelector((state: RootState) => state.book.item)

  useEffect(() => {
    if (!book && (book.isbn13) === bookId) return

    dispatch(fetchBook(bookId))
  }, [bookId, dispatch])

  if (!book) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
        <CardPreview key={book.isbn13} isbn13={book.isbn13} error={book.error} image={book.image} title={book.title} subtitle={book.subtitle} authors={book.authors} publisher={book.publisher} isbn10={book.isbn10} pages={book.pages} url={book.url} rating={book.rating} year={book.year} desc={book.desc} price={book.price}/>
    </>
  )
}
