import { usePurchases } from '../../hooks/usePurchases'
import './index.scss'

export const AmountBooks = () => {
  const { getPurchases } = usePurchases()
  const storedCounters = localStorage.getItem('counters')
  const counter = storedCounters ? JSON.parse(storedCounters) : {}

  const arrayPurchases = getPurchases()
  const totalPurchase = arrayPurchases.reduce((sum, purchases) => {
    const bookPrice = parseFloat(purchases.price.replace('$', ''))
    const counterValues = counter[purchases.isbn13] || 0
    return sum + (counterValues * bookPrice)
  }, 0)
  const finalCost = (totalPurchase + 12.5).toFixed(2)

  return (
    <div className="wrap-amount-books">
        <div className="sum-total">
            <p className="item-name">Sum total</p>
            <p className="amount">{totalPurchase}</p>
        </div>
        <div className="VAT">
            <p className="item-name">VAT</p>
            <p className="amount">$ 12.50</p>
        </div>
        <div className="total">
            <p className="item-name-total">TOTAL:</p>
            <p className="amount-total">{finalCost}</p>
        </div>
        <div className="button-check-out">
            <button className="check-out">CHECK OUT</button>
        </div>
    </div>
  )
}
