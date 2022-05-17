import React, { useState } from "react";
import { makeid } from "../functions/functions";

const Card = ({ pokemonArr, addFav, favs }) => {
	// Extract ids from favs array in order to set fav star colour
	let clickedArr = favs.map((a) => a.id);
	const [clicked, setClicked] = useState(clickedArr);
	// console.log(pokemonArr);
	// console.log(clicked);
	// console.log(clickedArr);
	return (
		<>
			<div className="grid">
				{pokemonArr.map((pokemon) => {
					// console.log(pokemon.types);
					const pokeId = pokemon.id;
					const pokeName = pokemon.name;
					const pokeSpirte = pokemon.sprites.front_default;
					const pokeTypes = pokemon.types;
					return (
						<div className={`card ${pokeTypes[0].type.name}`} key={pokeId}>
							<div className="card__info col-8">
								<div className="d-flex align-items-center">
									<small className="card__info__id"># {pokeId}</small>
									<img
										src={
											clicked.includes(pokeId)
												? require("../assets/images/star-png-min.png")
												: require("../assets/images/star-hollow.png")
										}
										alt="holow star"
										onClick={() => {
											// console.log("clicked");
											addFav(pokeId);
											setClicked([...clicked, pokeId]);
										}}
										className="card__info__fav"
									/>
								</div>
								<h3 className="card__info__name">{pokeName}</h3>
								<div className="card__info__types">
									{pokeTypes.map((item) => {
										const pokeType = item.type.name;

										return (
											<p
												className={`card__info__types__type ${pokeType}`}
												key={makeid()}
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
