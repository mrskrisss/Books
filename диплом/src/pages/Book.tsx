import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../redux/book-slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { CardPreview } from '../components/cardBookPreview'

export function Book () {
  const { bookId } = useParams<{bookId: string}>()
  const dispatch = useDispatch<AppDispatch>()
  const book = useSelector((state: RootState) => state.book.item)

  useEffect(() => {
    if (!book || (book.isbn13 as string) !== bookId) return

    dispatch(fetchBook(bookId))
  }, [bookId, book, dispatch])

  if (!book) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
        <CardPreview isbn13={book.isbn13}/>
    </>
  )
}
