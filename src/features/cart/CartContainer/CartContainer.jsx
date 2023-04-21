import React from 'react'
import './CartContainer.scss'
import CartCard from '../CartCard/CartCard'

const CartContainer = ({ products, cartItems }) => {
	let totalPrice = 0
	cartItems.forEach((item) => {
		const product = products.find((product) => product.id === item.productId)
		totalPrice = totalPrice + product.price * item.quantity
	})

	return (
		<section className="cart-card-container">
			<p className="total-price">Total ${totalPrice.toFixed(2)}</p>
			<table>
				<thead>
					<tr>
						<td>Item</td>
						<td className="extend">Quantity</td>
						<td className="extend">Price</td>
					</tr>
				</thead>
				<tbody>
					{cartItems
						.slice()
						.reverse()
						.map((item) => {
							const product = products.find(
								(product) => product.id === item.productId
							)

							return (
								<tr key={item.id}>
									<td>
										<CartCard product={product} id={item.id} />
									</td>
									<td>{item.quantity}</td>
									<td>${(product.price * item.quantity).toFixed(2)}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</section>
	)
}

export default CartContainer
