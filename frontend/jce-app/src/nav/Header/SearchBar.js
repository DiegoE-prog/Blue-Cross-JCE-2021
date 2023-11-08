import React from "react"

function SearchBar() {
	return (
		<div className="row">
			<div className="col-12 text-end">
				<input className="general-jce m-1" placeholder="Search..." />
				<button className="btn btn-blue " style={{ border: "none" }}>
					SEARCH
				</button>
			</div>
		</div>
	)
}

export default SearchBar
