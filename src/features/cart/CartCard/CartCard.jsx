import React from 'react'
import './CartCard.scss'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeItem } from '../cartSlice'

const CartCard = ({ product, id }) => {
	const { title, price, rating, image } = product
	const dispatch = useDispatch()

	return (
		<article className="cart-card">
			<div className="cart-card-image-container">
				<img src={image} alt="" className="cart-card-image product-image" />
			</div>
			<div className="cart-card-info-container">
				<h3 className="cart-card-title">{title}</h3>
				<p className="cart-card-price">
					{price} <span>$</span>
				</p>
				<p className="cart-card-rating">
					<span className="rating">
						{rating.rate} <FaStar className="star-icon" />
					</span>
					<span className="reviews">{rating.count} reviews</span>
				</p>

				<a className="remove-link" onClick={() => dispatch(removeItem(id))}>
					Remove
				</a>
			</div>
		</article>
	)
}

export default CartCard
