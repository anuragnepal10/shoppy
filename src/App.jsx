import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {
	const router = createHashRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <HomePage />,
				},
				{
					path: '/product/:id',
					element: <ProductPage />,
				},
				{
					path: '/cart',
					element: <CartPage />,
				},
				{
					path: '/about',
					element: <AboutPage />,
				},
				{
					path: '*',
					element: <ErrorPage />,
				},
			],
		},
	])
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	)
}

export default App
