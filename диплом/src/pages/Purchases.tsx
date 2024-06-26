import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { CardPurchases } from '../components/cardPuschases'
import { usePurchases } from '../hooks/usePurchases'
import { useCounter } from '../hooks/useCounter'
import { BackButton } from '../components/backButton'
import { AmountBooks } from '../components/amountBooks'
import { ICardBook } from '../types/ICardBook'
import { Title } from '../components/title'

export const Purchases = (props: ICardBook) => {
  const { getPurchases } = usePurchases()
  const { getCounter } = useCounter(props)
  const [state, setState] = useState(getPurchases())
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  const purchases = getPurchases()
  const numberOfPurchases = purchases.length
  console.log(numberOfPurchases)

  const numberOfCopies = getCounter()
  console.log(numberOfCopies)

  const total = numberOfPurchases * numberOfCopies
  console.log(total)

  useEffect(() => {
    setState(getPurchases())
  }, [])

  const renderBooks = () => {
    if (!Array.isArray(state)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{state?.map((book) => <CardPurchases key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
  }

  return (
    <>
      <div className="button-back">
        <BackButton />
      </div>
      <Title>Your cart</Title>
      <div className="wrapper-cards" style={{ padding: '10px' }}>
        {renderBooks()}
        <div className="amount-books" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AmountBooks />
        </div>
      </div>
    </>
  )
}
