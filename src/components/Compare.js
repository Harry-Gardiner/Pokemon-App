import React from "react";
import PokemonData from "./Pokemon";

/**
 * Component handling the compare layout
 *
 * Takes an array of objects
 */
const ComparePokemon = ({ compare, resetCompare }) => {
	// console.log(compare);
	let pokemon1 = compare[0];
	let pokemon2 = compare[1];
	return (
		<div className="compare">
			<div className="compare__container row">
				<div className="column col-5">
					<PokemonData pokemonObj={pokemon1} />
				</div>

				<div className="column col-2 vs">
					<img src={require("../assets/images/vs-min.png")} alt="vs img" />
				</div>

				<div className="column col-5">
					<PokemonData pokemonObj={pokemon2} />
				</div>
			</div>
			<div className="compare__reset">
				<button onClick={resetCompare}>Reset Pokemon</button>
			</div>
		</div>
	);
};

export default ComparePokemon;
