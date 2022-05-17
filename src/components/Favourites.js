import React from "react";
import { makeid } from "../functions/functions";

const Favourites = ({ favs }) => {
	console.log(favs);
	return (
		<div className="fav">
			<h2>Favourites</h2>
			{favs.length == 0 ? "No favourites selected" : ""}
			<div className="fav__container">
				{favs.map((pokemon) => {
					return (
						<div className="fav__container__pokemon" key={makeid()}>
							<img src={pokemon.sprites.front_default} alt={pokemon.name} />
							<small>{pokemon.name}</small>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Favourites;
