import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks } from '../services/book'
import { ICardBook } from '../types/ICardBook'

export interface BooksState {
  list: ICardBook[],
  isLoading: boolean,
  error: string | null | undefined,
}

const initialState: BooksState = {
  list: [],
  isLoading: false,
  error: null
}

// Thunks
export const fetchBooks = createAsyncThunk('new/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    return await requestBooks()
  } catch (e) {
    return rejectWithValue((e as Error).message)
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        state.list = action.payload.books
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const booksReducer = booksSlice.reducer
