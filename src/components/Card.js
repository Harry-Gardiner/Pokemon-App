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
                            <div className="card" key={pokeId}>
                                <small className="card__id">{pokeId}</small>
                                <h2 className="card__name">{pokeName}</h2>
                                <img src={pokeSpirte} alt={pokeName} className="card__sprite"/>
                                <div>
                                    {
                                        pokeTypes.map((item) => {
                                            const pokeType = item.type.name;

                                            return (
                                               <p className="card__type">{pokeType}</p> 
                                            )
                                        })
                                    }
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