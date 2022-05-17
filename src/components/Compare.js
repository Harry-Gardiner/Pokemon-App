import React from "react";
import { makeid } from "../functions/functions";
import PokemonData from "./Pokemon";
const ComparePokemon = ({ compare }) => {
	console.log(compare);
	let pokemon1 = compare[0];
	let pokemon2 = compare[1];
	return (
		<div className="compare">
			<h2>Compare Pokemon</h2>
			<small>Select 2 pokemon to compare by clicking the pokerball</small>
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
		</div>
	);
};

export default ComparePokemon;
