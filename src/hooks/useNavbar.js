import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../features/nav/navSlice'

export const useNavbar = (currentNav) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle(currentNav))
	}, [])
}
