import React from "react";
import { makeid } from "../functions/functions";

/**
 * Component handling the layout of favourites
 *
 * Takes an array of objects
 */
const Favourites = ({ favs, resetFavs }) => {
	// console.log(favs); Arr of objects
	return (
		<div className="fav">
			<h2>Favourites</h2>
			<small>Select favourites by clicking the star</small>
			<p>{favs.length == 0 ? "No favourites selected" : ""}</p>
			<div className="fav__container">
				{favs.map((pokemon, i) => {
					return (
						<div className="fav__container__pokemon" key={i}>
							<img src={pokemon.sprites.front_default} alt={pokemon.name} />
							<small>{pokemon.name}</small>
						</div>
					);
				})}
			</div>
			<div className="compare__reset">
				<button onClick={resetFavs}>Reset favourites</button>
			</div>
		</div>
	);
};

export default Favourites;
