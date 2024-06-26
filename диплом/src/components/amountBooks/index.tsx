import './index.scss'

export const AmountBooks = () => {
  return (
    <div className="wrap-amount-books">
        <div className="sum-total">
            <p className="item-name">Sum total</p>
            <p className="amount">$ 69.26</p>
        </div>
        <div className="VAT">
            <p className="item-name">VAT</p>
            <p className="amount">$ 69.26</p>
        </div>
        <div className="total">
            <p className="item-name-total">TOTAL:</p>
            <p className="amount-total">$ 69.26</p>
        </div>
        <div className="button-check-out">
            <button className="check-out">CHECK OUT</button>
        </div>
    </div>
  )
}
