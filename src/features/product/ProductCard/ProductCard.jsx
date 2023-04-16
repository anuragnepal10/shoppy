import React from 'react'
import './ProductCard.scss'
import { FaStar } from 'react-icons/fa'

const ProductCard = () => {
	return (
		<article className="product-card">
			<div className="product-card-image-container"></div>
			<div className="product-card-info-container">
				<h3 className="product-card-title">Lorem ipsum dolor sit</h3>
				<div>
					<p className="product-card-price">
						900<span> $</span>
					</p>
					<p className="product-card-rating">
						3.9
						<FaStar className="star-icon" />
					</p>
				</div>
			</div>
		</article>
	)
}

export default ProductCard
