import React, { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import './Searchbar.scss'

const Searchbar = () => {
	const ref = useRef(0)
	const handleFocus = () => {
		ref.current.classList.add('active')
	}
	const handleBlur = () => {
		ref.current.classList.remove('active')
	}

	return (
		<form
			action=""
			className="search-bar"
			onSubmit={(e) => e.preventDefault()}
			ref={ref}
		>
			<div className="search-icon-holder">
				<FaSearch className="search-icon" />
			</div>
			<input
				type="text"
				placeholder="Search products"
				className="search-bar-input"
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</form>
	)
}

export default Searchbar
