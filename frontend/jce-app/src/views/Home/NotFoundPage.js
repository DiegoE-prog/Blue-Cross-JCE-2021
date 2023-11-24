import React, { useEffect } from 'react'

function NotFoundPage(props) {
    useEffect(() => {
        document.title = props.title 
    }, [props.title])
    
	return (
		<div className="container">
			<h1>Page Not Found, please contact system administrator.</h1>
		</div>
	)
}

export default NotFoundPage