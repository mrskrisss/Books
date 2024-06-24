import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBook } from '../services/book'
import { IBookPreview } from '../types/ICardPreview'

export interface BookState {
  item: { [isbn13: string]: IBookPreview & { isFavorite: boolean } },
  isLoading: boolean,
  error: string | null | undefined
}

const initialState: BookState = {
  item: {},
  isLoading: false,
  error: null
}

// Thunks
export const fetchBook = createAsyncThunk('books/fetchBook', async (isbn13: string, { rejectWithValue }) => {
  try {
    return await requestBook(isbn13)
  } catch (e) {
    return rejectWithValue((e as Error).message)
  }
})

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    toggleFavoriteById: (state, action) => {
      const isbn13 = action.payload
      console.log(action.payload.isbn13)
      const booksFavorite = state.item[isbn13]
      console.log(booksFavorite)
      if (booksFavorite) {
        state.item[isbn13] = {
          ...booksFavorite,
          isFavorite: !booksFavorite.isFavorite
        }
        console.log(booksFavorite.isFavorite)
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBook.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        const bookData = action.payload
        const booksFavorite = { ...bookData, isFavorite: false }
        state.item = booksFavorite
        console.log(booksFavorite)
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { toggleFavoriteById } = bookSlice.actions
export const bookReducer = bookSlice.reducer
