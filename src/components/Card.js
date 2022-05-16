import React from "react";

const Card = ({pokemonArr}) => {
    console.log(pokemonArr);
    return (
        <>
            <div className="grid">
                {
                    pokemonArr.map((pokemon) => {
                        console.log(pokemon.types);
                        const pokeId = pokemon.id;
                        const pokeName = pokemon.name;
                        const pokeSpirte = pokemon.sprites.front_default;
                        const pokeTypes = pokemon.types;

                        return (
                            <div className={`card ${pokeTypes[0].type.name}`} key={pokeId}>
                                <div className="card__info col-7">
                                    <small className="card__info__id"># {pokeId}</small>
                                    <h2 className="card__info__name">{pokeName}</h2>
                                    <div className="card__info__types">
                                        {
                                            pokeTypes.map((item) => {
                                                const pokeType = item.type.name;

                                                return (
                                                <p className={`card__info__types__type ${pokeType}`}>{pokeType}</p> 
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="card__sprite col-5">
                                    <img src={pokeSpirte} alt={pokeName} className="card__sprite__img"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;