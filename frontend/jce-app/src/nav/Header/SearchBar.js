import React from "react"

function SearchBar() {
	return (
		<div className="row">
			<div className="col-12 text-end">
				<input className="general-jce m-1" />
				<button className="btn btn-blue " style={{ border: "none" }}>
					Search
				</button>
			</div>
		</div>
	)
}

export default SearchBar
