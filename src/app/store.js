import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../features/nav/navSlice'
import { productReducer } from '../features/product/productSlice'
import { quantityReducer } from '../features/quantity/quantitySlice'
import { cartReducer } from '../features/cart/cartSlice'
import { searchReducer } from '../features/search/searchSlice'

export const store = configureStore({
	reducer: {
		nav: navReducer,
		product: productReducer,
		quantity: quantityReducer,
		cart: cartReducer,
		search: searchReducer,
	},
})
