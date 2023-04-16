import React from 'react'
import './CartContainer.scss'
import CartCard from '../CartCard/CartCard'

const CartContainer = () => {
	return (
		<section className="cart-card-container">
			<p className="total-price">Total $670</p>
			<table>
				<thead>
					<tr>
						<td>Item</td>
						<td className="extend">Quantity</td>
						<td className="extend">Price</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<CartCard />
						</td>
						<td>3</td>
						<td>$290</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default CartContainer
