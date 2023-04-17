import React from 'react'
import './CartCard.scss'
import { FaStar } from 'react-icons/fa'

const CartCard = () => {
	return (
		<article className="cart-card">
			<div className="cart-card-image-container"></div>
			<div className="cart-card-info-container">
				<h3 className="cart-card-title">Lorem ipsum dolor sit amet.</h3>
				<p className="cart-card-price">
					900 <span>$</span>
				</p>
				<p className="cart-card-rating">
					<span className="rating">
						4.0 <FaStar className="star-icon" />
					</span>
					<span className="reviews">132 reviews</span>
				</p>

				<a href="" className="remove-link">
					Remove
				</a>
			</div>
		</article>
	)
}

export default CartCard
