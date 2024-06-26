import { useState } from 'react'
import { IBookPreview } from '../types/ICardPreview'

export const useFavorite = () => {
  const [state, setState] = useState(getFavorite())

  function getFavorite () {
    const favorite = localStorage.getItem('favorite')
    if (favorite) {
      return JSON.parse(favorite)
    }
    return []
  }
  function addToFavorite (book: IBookPreview) {
    const favorite = getFavorite()
    favorite.push(book)
    setState(favorite)
    localStorage.setItem('favorite', JSON.stringify(favorite))
  }
  function removeFromFavorite (book: IBookPreview) {
    setState(prevState => {
      const updatedFavorite = prevState.filter(favoriteBook => favoriteBook.isbn13 !== book.isbn13)
      localStorage.setItem('favorite', JSON.stringify(updatedFavorite))
      return updatedFavorite
    })
  }
  function checkFavorite (id: string) {
    return state.find(book => book.isbn13 === id)
  }
  function toggleFavorite (book: IBookPreview) {
    return checkFavorite(book.isbn13) ? removeFromFavorite(book) : addToFavorite(book)
  }
  return { getFavorite, addToFavorite, removeFromFavorite, checkFavorite, toggleFavorite, state }
}
