import React from 'react'
import './ProductDetailContainer.scss'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import QuantityToggler from '../../quantity/QuantityToggler/QuantityToggler'

const ProductDetailContainer = ({ product }) => {
	const { title, description, rating, price, image } = product
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
				<form className="product-detail-control">
					<QuantityToggler />
					<button className="cart-btn">
						<FaShoppingCart /> Add to Cart
					</button>
				</form>
			</div>
		</section>
	)
}

export default ProductDetailContainer
