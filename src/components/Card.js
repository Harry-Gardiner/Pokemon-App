import React from "react";

const Card = ({ pokemonArr }) => {
	// console.log(pokemonArr);
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
								<small className="card__info__id"># {pokeId}</small>
								<h3 className="card__info__name">{pokeName}</h3>
								<div className="card__info__types">
									{pokeTypes.map((item) => {
										const pokeType = item.type.name;

										// Func to create unique ID for key
										function makeid() {
											let text = "";
											const possible =
												"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

											for (let i = 0; i < 5; i++)
												text += possible.charAt(
													Math.floor(Math.random() * possible.length)
												);

											return text;
										}
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
