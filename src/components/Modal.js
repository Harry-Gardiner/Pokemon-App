import React, { useState } from "react";
import { makeid } from "../functions/functions";

const PokemonModal = ({ singlePokemonData, setShowModal }) => {
	// console.log(singlePokemonData);
	const p = singlePokemonData;

	return (
		<div onClick={setShowModal}>
			<div className="modal-background"></div>
			<div className="modal">
				<div className="modal__content">
					<div className={`column-1 ${p.types[0].type.name}`}>
						<h1 className="modal__content__name">{p.name}</h1>
						<img
							className="modal__content__sprite"
							src={
								p.sprites.other.dream_world.front_default !== null
									? p.sprites.other.dream_world.front_default
									: p.sprites.front_default
							}
							alt={p.name}
						/>
					</div>
					<div className="column-2 modal__content_stats">
						<p className="modal__content__stats__title">Base Stats</p>
						{p.stats.map((s) => {
							const statName = s.stat.name;
							const statValue = s.base_stat;

							return (
								<div
									className="modal__content__stats__container"
									key={makeid()}
								>
									<small className="modal__content__stats__container__stat">
										{statName}:&nbsp;
									</small>
									<small className="modal__content__stats__container__value">
										{statValue}
									</small>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonModal;
