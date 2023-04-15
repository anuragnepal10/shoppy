import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	active: 'home',
}

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggle: (state, { payload }) => {
			state.active = payload
		},
	},
})

export default navSlice.reducer
export const { toggle } = navSlice.actions
