import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import CartContainer from '../../features/cart/CartContainer/CartContainer'
import { useSelector } from 'react-redux'
import ErrorMessage from '../ErrorPage/ErrorMessage'

const CartPage = () => {
	useNavbar('Cart')
	const { isLoading, products, error } = useSelector((state) => state.product)
	const cartItems = useSelector((state) => state.cart.items)

	return isLoading ? (
		<div className="wrapper">
			<h1 className="page-title">Loading...</h1>
		</div>
	) : error ? (
		<ErrorMessage message={error} />
	) : products.length !== 0 ? (
		cartItems.length === 0 ? (
			<ErrorMessage message={'Your Cart is Empty'} />
		) : (
			<div className="wrapper">
				<h1 className="page-title">Cart</h1>
				<CartContainer products={products} cartItems={cartItems} />
			</div>
		)
	) : null
}

export default CartPage
