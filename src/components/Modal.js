import React, { useState } from "react";
import { makeid } from "../functions/functions";
import PokemonData from "./Pokemon";

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
