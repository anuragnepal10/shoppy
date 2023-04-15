import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../features/nav/navSlice'

const CartPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggle('cart'))
	}, [])
	return <div>CartPage</div>
}

export default CartPage
