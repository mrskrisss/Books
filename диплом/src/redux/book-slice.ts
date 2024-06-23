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
      if (state.item[isbn13]) {
        state.item[isbn13].isFavorite = !state.item[isbn13].isFavorite
      }
      console.log(action.payload.isFavorite)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBook.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload.isFavorite)
        state.item = {
          ...state.item,
          [action.payload.isbn13]: {
            ...action.payload,
            isFavorite: false
          }
        }
        // state.item[action.payload.isbn13] = { ...action.payload, isFavorite: false }
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { toggleFavoriteById } = bookSlice.actions
export const bookReducer = bookSlice.reducer
