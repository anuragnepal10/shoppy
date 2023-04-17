import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com/products'

const initialState = {
	isLoading: false,
	products: [],
	error: null,
}

export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async () => {
		const res = await axios.get(API_URL)
		const products = res.data
		return products
	}
)

const productSlice = createSlice({
	name: 'product',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.products = payload
			state.error = null
		})
		builder.addCase(fetchProducts.rejected, (state, { error }) => {
			state.isLoading = false
			state.products = []
			state.error = error.message
		})
	},
})

export const productReducer = productSlice.reducer
