import React, { useState } from "react";

/**
 * Component handling the grid layout of pokemon
 *
 * Takes an array of objects
 */
const Card = ({
	pokemonArr,
	addFav,
	favs,
	addCompare,
	compare,
	getPokemon,
}) => {
	// Extract ids from favs array in order to set fav star colour
	let clickedArr = favs.map((a) => a.id);

	// Extracrt ids from compare to set seleted
	let compareArr = compare.map((a) => a.id);

	// console.log(pokemonArr);
	// console.log(clickedArr);
	// console.log(compareArr);

	return (
		<>
			<div className="grid">
				{pokemonArr.map((pokemon, i) => {
					const pokeId = pokemon.id;
					const pokeName = pokemon.name;
					const pokeSpirte = pokemon.sprites.front_default;
					const pokeTypes = pokemon.types;

					return (
						<div className={`card ${pokeTypes[0].type.name}`} key={i}>
							<div className="card__info col-8">
								<div className="d-flex align-items-center">
									<small className="card__info__id"># {pokeId}</small>
									<button
										className="btn-stripped"
										onClick={() => {
											// console.log("clicked");
											addFav(pokeId);
										}}
									>
										<img
											src={
												clickedArr.includes(pokeId)
													? require("../assets/images/star-png-min.png")
													: require("../assets/images/star-hollow.png")
											}
											alt="holow star"
											className="card__info__fav"
										/>
									</button>
									<button
										className="btn-stripped"
										disabled={
											compare.length > 1 && !compareArr.includes(pokeId)
												? true
												: false
										}
										onClick={() => {
											// console.log("clicked");
											addCompare(pokeId);
										}}
									>
										<img
											src={
												compareArr.includes(pokeId)
													? require("../assets/images/closed-pokeball-min.png")
													: require("../assets/images/open-pokeball-min.png")
											}
											alt="pokeball img"
											className="card__info__fav"
										/>
									</button>
									<button
										className="btn-stripped"
										onClick={() => {
											getPokemon(pokeName);
										}}
									>
										<img
											src={require("../assets/images/info-icon.png")}
											alt=""
											className="card__info__fav"
										/>
									</button>
								</div>
								<h3 className="card__info__name">{pokeName}</h3>
								<div className="card__info__types">
									{pokeTypes.map((item, i) => {
										const pokeType = item.type.name;

										return (
											<p
												className={`card__info__types__type ${pokeType}`}
												key={i}
											>
												{pokeType}
											</p>
										);
									})}
								</div>
							</div>
							<div className="card__sprite col-4">
								<img
									src={pokeSpirte}
									alt={pokeName}
									className="card__sprite__img"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Card;
