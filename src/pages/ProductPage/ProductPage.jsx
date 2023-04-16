import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import ProductDetailContainer from '../../features/product/ProductDetailContainer/ProductDetailContainer'

const ProductPage = () => {
	useNavbar('Product')

	return (
		<div className="wrapper">
			<h1 className="page-title">Product Details</h1>
			<ProductDetailContainer />
		</div>
	)
}

export default ProductPage
