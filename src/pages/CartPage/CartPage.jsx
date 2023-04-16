import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import CartContainer from '../../features/cart/CartContainer/CartContainer'

const CartPage = () => {
	useNavbar('Cart')

	return (
		<div className="wrapper">
			<h1 className="page-title">My Cart</h1>
			<CartContainer />
		</div>
	)
}

export default CartPage
