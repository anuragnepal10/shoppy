import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, { payload }) => {
			state.value = payload
		},
	},
})

export const searchReducer = searchSlice.reducer
export const { setSearch } = searchSlice.actions
