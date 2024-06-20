import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './books-slice'
import { bookReducer } from './book-slice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer
  }
})

// Вывод `RootState` и `AppDispatch` types из store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
