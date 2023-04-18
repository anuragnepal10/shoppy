import React from 'react'
import './ProductCard.scss'
import { FaStar } from 'react-icons/fa'
const ProductCard = ({ product }) => {
	const { title, price, image, rating } = product

	return (
		<article className="product-card">
			<div className="product-card-image-container">
				<img src={image} alt="" className="product-card-image product-image" />
			</div>
			<div className="product-card-info-container">
				<h3 className="product-card-title">{title}</h3>
				<div>
					<p className="product-card-price">
						{price}
						<span> $</span>
					</p>
					<p className="product-card-rating">
						{rating.rate}
						<FaStar className="star-icon" />
					</p>
				</div>
			</div>
		</article>
	)
}

export default ProductCard
