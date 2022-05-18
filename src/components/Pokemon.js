import React from "react";

/**
 * Component handling the layout of a single pokemons info
 *
 * Takes an single objects
 */
const PokemonData = ({ pokemonObj }) => {
	// console.log(pokemonObj);
	const p = pokemonObj;
	return (
		<div className={`pokemon-single ${p.types[0].type.name}`}>
			<h4 className="pokemon-single__name">{p.name}</h4>
			<img
				className="pokemon-single__sprite"
				src={
					p.sprites.other.dream_world.front_default !== null
						? p.sprites.other.dream_world.front_default
						: p.sprites.front_default
				}
				alt={p.name}
			/>
			<p className="pokemon-single__stat-title">Base Stats</p>
			{p.stats.map((s, i) => {
				const statName = s.stat.name;
				const statValue = s.base_stat;

				return (
					<div className="pokemon-single__stats__container" key={i}>
						<small className="pokemon-single__stats__stat">
							{statName}:&nbsp;
						</small>
						<small className="pokemon-single__stats__value">{statValue}</small>
					</div>
				);
			})}
		</div>
	);
};

export default PokemonData;
