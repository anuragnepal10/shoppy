import React from 'react'
import './ProductDetailContainer.scss'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import QuantityToggler from '../../quantity/QuantityToggler/QuantityToggler'

const ProductDetailContainer = () => {
	return (
		<section className="product-detail-container">
			<div className="product-detail-image-container"></div>
			<div className="container">
				<div className="product-detail-info-container">
					<h2 className="product-detail-title">Lorem ipsum dolor sit amet.</h2>
					<p className="product-detail-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
						quibusdam. Distinctio eaque modi nam veritatis pariatur at adipisci
						sunt deserunt.
					</p>
					<p className="product-detail-rating">
						<span className="rating">
							4.0 <FaStar className="star-icon" />
						</span>
						<span className="reviews">132 reviews</span>
					</p>
					<p className="product-detail-price">
						900<span>$</span>
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
