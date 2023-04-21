import React from 'react'
import './ProductDetailContainer.scss'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import QuantityToggler from '../../quantity/QuantityToggler/QuantityToggler'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addItem } from '../../cart/cartSlice'
import { reset } from '../../quantity/quantitySlice'

const ProductDetailContainer = ({ product }) => {
	const { title, description, rating, price, image } = product
	const dispatch = useDispatch()
	const quantity = useSelector((state) => state.quantity.value)
	const productId = parseInt(useParams().id)
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addItem({ productId, quantity }))
		dispatch(reset())
		navigate('/cart')
	}

	return (
		<section className="product-detail-container">
			<div className="product-detail-image-container">
				<img
					src={image}
					alt=""
					className="product-detail-image product-image"
				/>
			</div>
			<div className="container">
				<div className="product-detail-info-container">
					<h2 className="product-detail-title">{title}</h2>
					<p className="product-detail-description">{description}</p>
					<p className="product-detail-rating">
						<span className="rating">
							{rating.rate} <FaStar className="star-icon" />
						</span>
						<span className="reviews">{rating.count} reviews</span>
					</p>
					<p className="product-detail-price">
						{price}
						<span>$</span>
					</p>
				</div>
				<hr />
				<form
					className="product-detail-control"
					onSubmit={(e) => handleSubmit(e)}
				>
					<QuantityToggler />
					<button className="cart-btn" type="submit">
						<FaShoppingCart /> Add to Cart
					</button>
				</form>
			</div>
		</section>
	)
}

export default ProductDetailContainer
