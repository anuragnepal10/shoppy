import React from 'react'
import './QuantityToggler.scss'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../quantitySlice'

const QuantityToggler = () => {
	const quantity = useSelector((state) => state.quantity)
	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(increment())
	}

	const handleDecrement = () => {
		dispatch(decrement())
	}

	const isDisabled = (mode) => {
		if (mode === 'inc' && quantity.value === 5) {
			return true
		} else if (mode === 'dec' && quantity.value === 1) {
			return true
		} else {
			return false
		}
	}

	return (
		<div className="quantity-toggler">
			<button
				className="btn"
				onClick={handleDecrement}
				disabled={isDisabled('dec')}
			>
				-
			</button>
			<input type="number" value={quantity.value} readOnly />
			<button
				className="btn"
				onClick={handleIncrement}
				disabled={isDisabled('inc')}
			>
				+
			</button>
		</div>
	)
}

export default QuantityToggler
