import React, { useEffect } from "react"

function Home(props) {
	useEffect(() => {
		document.title = props.title
	}, [props.title])

	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}

export default Home
