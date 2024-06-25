import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './books-slice'
import { bookReducer } from './book-slice'
import { counterReducer } from './counter-slice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    counter: counterReducer
  }
})

// Вывод `RootState` и `AppDispatch` types из store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
