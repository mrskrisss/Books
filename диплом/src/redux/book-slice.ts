import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBook } from '../services/book'
import { IBookPreview } from '../types/ICardPreview'

export interface BookState {
  item: IBookPreview,
  isLoading: boolean,
  error: string | null | undefined,
}

const initialState: BookState = {
  item: {},
  isLoading: false,
  error: null
}

// Thunks
export const fetchBook = createAsyncThunk('/books/{isbn13}/fetchBook', async (isbn13: string, { rejectWithValue }) => {
  try {
    return await requestBook(isbn13)
  } catch (e) {
    return rejectWithValue((e as Error).message)
  }
})

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBook.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.item = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const bookReducer = BookSlice.reducer
