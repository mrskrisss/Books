import { useState, useEffect } from 'react'
import { ICardBook } from '../types/ICardBook'

export const useCounter = (book: ICardBook) => {
  const [counters, setCounters] = useState({})

  useEffect(() => {
    const storedCounters = localStorage.getItem('counters')
    if (storedCounters) {
      setCounters(JSON.parse(storedCounters))
    }
  }, [])

  function incrementCounter () {
    setCounters(prevCounters => {
      const updatedCounters = { ...prevCounters }
      updatedCounters[book.isbn13] = (updatedCounters[book.isbn13] || 0) + 1
      localStorage.setItem('counters', JSON.stringify(updatedCounters))
      return updatedCounters
    })
  }

  function decrementCounter () {
    setCounters(prevCounters => {
      const updatedCounters = { ...prevCounters }
      if (updatedCounters[book.isbn13] && updatedCounters[book.isbn13] > 0) {
        updatedCounters[book.isbn13] -= 1
        localStorage.setItem('counters', JSON.stringify(updatedCounters))
      }
      return updatedCounters
    })
  }

  function getCounter () {
    return counters[book.isbn13] || 0
  }

  return { incrementCounter, decrementCounter, getCounter }
}
