import React from "react";
import { makeid } from "../functions/functions";
const ComparePokemon = ({ compare }) => {
	console.log(compare);
	let p1 = compare[0];
	let p2 = compare[1];
	return (
		<div className="compare">
			<h2>Compare Pokemon</h2>
			<small>Select 2 pokemon to compare by clicking the pokerball</small>
			<div className="compare__container row">
				<div className={`column col-5 ${p1.types[0].type.name}`}>
					<h1 className="modal__content__name">{p1.name}</h1>
					<img
						className="modal__content__sprite"
						src={
							p1.sprites.other.dream_world.front_default !== null
								? p1.sprites.other.dream_world.front_default
								: p1.sprites.front_default
						}
						alt={p1.name}
					/>

					<p className="modal__content__stats__title">Base Stats</p>
					{p1.stats.map((s) => {
						const statName = s.stat.name;
						const statValue = s.base_stat;

						return (
							<div className="modal__content__stats__container" key={makeid()}>
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
				<div className="column col-2">VS</div>
				<div className="column col-5">
					<div className={`column col-5 ${p2.types[0].type.name}`}>
						<h1 className="modal__content__name">{p2.name}</h1>
						<img
							className="modal__content__sprite"
							src={
								p2.sprites.other.dream_world.front_default !== null
									? p2.sprites.other.dream_world.front_default
									: p2.sprites.front_default
							}
							alt={p2.name}
						/>

						<p className="modal__content__stats__title">Base Stats</p>
						{p2.stats.map((s) => {
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

export default ComparePokemon;
