import React, { useEffect } from "react"
import HomePicJCE from "../logos/HomePicJCE.png"

function Home(props) {
	useEffect(() => {
		document.title = props.title
	}, [props.title])

	return (
		<div className="container">
			<h1>Home Page</h1>
			<img src={HomePicJCE} style={{ width: 800, height: 450 }} />
		</div>
	)
}

export default Home
