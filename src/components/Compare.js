import React from "react";

const ComparePokemon = ({ compare }) => {
	console.log(compare);
	return (
		<div className="compare">
			<h2>Compare Pokemon</h2>
			<small>Select 2 pokemon to compare by clicking the pokerball</small>
			<div className="compare__container row">
				<div className="column col-5">Test Col 1</div>
				<div className="column col-2">VS</div>
				<div className="column col-5">Test Col 2</div>
			</div>
		</div>
	);
};

export default ComparePokemon;
