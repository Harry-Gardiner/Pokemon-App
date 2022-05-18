import React from "react";
import PokemonData from "./Pokemon";

/**
 * Component handling the display of a single pokemon in a modal format
 *
 * Takes an object
 */
const PokemonModal = ({ singlePokemonData, setShowModal }) => {
	// console.log(singlePokemonData);
	const p = singlePokemonData;

	return (
		<div onClick={setShowModal}>
			<div className="modal-background"></div>
			<div className="modal">
				<PokemonData pokemonObj={p} />
			</div>
		</div>
	);
};

export default PokemonModal;
