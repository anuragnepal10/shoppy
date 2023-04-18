import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'
import { ScrollToTop } from '../../common/he;pers/ScrollToTop'

const Layout = () => {
	return (
		<>
			<ScrollToTop />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
