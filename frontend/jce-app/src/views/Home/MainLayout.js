import React from 'react'
import Navbar from './Navbar'
import Header from '../../nav/Header/Header'
import Footer from '../../nav/Footer/Footer'

function MainLayout({ children }) {
	return (
		<>
			<div className="App">
			    <div className="content"></div>
					<Header />
					<Navbar />
					{children}
					<Footer />
				</div>
			</>
		)
}

export default MainLayout