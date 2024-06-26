import { useState } from 'react'
import { IBookPreview } from '../types/ICardPreview'

export const usePurchases = () => {
  const [state, setState] = useState(getPurchases())

  function getPurchases () {
    const purchases = localStorage.getItem('purchases')
    if (purchases) {
      return JSON.parse(purchases)
    }
    return []
  }
  function addToPurchases (book: IBookPreview) {
    const purchases = getPurchases()
    purchases.push(book)
    setState(purchases)
    localStorage.setItem('purchases', JSON.stringify(purchases))
  }
  function removeFromPurchases (book: IBookPreview) {
    setState(prevState => {
      const updatedPurchases = prevState.filter(purchasesBook => purchasesBook.isbn13 !== book.isbn13)
      localStorage.setItem('purchases', JSON.stringify(updatedPurchases))
      return updatedPurchases
    })
  }
  function checkPurchases (id: string) {
    return state.find(book => book.isbn13 === id)
  }
  function togglePurchases (book: IBookPreview) {
    return checkPurchases(book.isbn13) ? removeFromPurchases(book) : addToPurchases(book)
  }
  return { getPurchases, addToPurchases, removeFromPurchases, checkPurchases, togglePurchases, state }
}
