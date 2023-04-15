import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/nav/navSlice'

const HomePage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle('home'))
	}, [])
	return <div>HomePage</div>
}

export default HomePage
