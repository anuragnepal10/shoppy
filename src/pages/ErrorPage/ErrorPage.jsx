import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/nav/navSlice'

const ErrorPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle('error'))
	}, [])
	return <div>ErrorPage</div>
}

export default ErrorPage
