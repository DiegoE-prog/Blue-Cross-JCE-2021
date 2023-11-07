import React from "react"

function CostSection({ costs, setCosts }) {
	const handleChange = (e) => {
		const value = e.target.value
		setCosts({
			...costs,
			[e.target.name]: value
		})
	}

	return (
		<div className="row">
			<div className="col-6 "></div>
			<div className="col-6">
				<div className="row">
					<div className="col-6">
						<label className="general-jce">Cost for Service</label>
					</div>
					<div className="col-6">
						<input name="costForService" id="costForService" value={costs.costForService} onChange={handleChange}></input>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label className="general-jce">Cost of Material</label>
					</div>
					<div className="col-6">
						<input name="costOfMaterial" id="costOfMaterial" value={costs.costOfMaterial} onChange={handleChange}></input>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label className="general-jce">Cost for Medicine</label>
					</div>
					<div className="col-6">
						<input name="costForMedicine" id="costForMedicine" value={costs.costForMedicine} onChange={handleChange}></input>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label className="general-jce">Provider Cost</label>
					</div>
					<div className="col-6">
						<input name="providerCost" id="providerCost" value={costs.providerCost} onChange={handleChange}></input>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label className="general-jce">Total Amount</label>
					</div>
					<div className="col-6">
						<input name="totalAmount" id="totalAmount" value={costs.totalAmount} onChange={handleChange}></input>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CostSection
