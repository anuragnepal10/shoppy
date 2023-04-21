import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 1,
}

const quantitySlice = createSlice({
	name: 'quantity',
	initialState,
	reducers: {
		increment: (state) => {
			state.value++
		},
		decrement: (state) => {
			state.value--
		},
	},
})

export const quantityReducer = quantitySlice.reducer
export const { increment, decrement } = quantitySlice.actions
