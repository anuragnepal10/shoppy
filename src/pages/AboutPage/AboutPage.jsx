import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/nav/navSlice'

const AboutPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle('about'))
	}, [])
	return <div>AboutPage</div>
}

export default AboutPage
