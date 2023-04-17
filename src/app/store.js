import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../features/nav/navSlice'
import { productReducer } from '../features/product/productSlice'

export const store = configureStore({
	reducer: {
		nav: navReducer,
		product: productReducer,
	},
})
