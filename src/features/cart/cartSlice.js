import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, { payload }) => {
			if (state.items.length === 0) {
				const cartItem = {
					id: 1,
					productId: payload.productId,
					quantity: payload.quantity,
				}
				state.items.push(cartItem)
			} else {
				const id = state.items[state.items.length - 1].id + 1
				state.items = state.items.filter(
					(item) => item.productId.toString() !== payload.productId.toString()
				)
				const cartItem = {
					id,
					productId: payload.productId,
					quantity: payload.quantity,
				}
				state.items.push(cartItem)
			}
			localStorage.setItem('shoppyCart', JSON.stringify(state.items))
		},

		removeItem: (state, { payload }) => {
			state.items = state.items.filter(
				(item) => item.id.toString() !== payload.toString()
			)
			localStorage.setItem('shoppyCart', JSON.stringify(state.items))
		},

		fetchCartItems: (state) => {
			const cart = localStorage.getItem('shoppyCart')
			state.items = cart ? JSON.parse(cart) : []
		},
	},
})

export const cartReducer = cartSlice.reducer
export const { addItem, removeItem, fetchCartItems } = cartSlice.actions
