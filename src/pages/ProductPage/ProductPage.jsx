import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/nav/navSlice'

const ProductPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle('product'))
	}, [])
	return <div>ProductPage</div>
}

export default ProductPage
