import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);

	const getPokemonData = async() => {
        setLoading(true);
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemonData(res.data.results);
        setLoading(false)
    }

	const setPokemonData = async(res) => {
        res.map(async(item)=>{
            const result =  await axios.get(item.url);
            setPokemon(state => {
                state = [...state,result.data]
                state.sort((a,b) => a.id>b.id?1:-1)
                return state;
            })
        })
    }

	useEffect(() => {
		getPokemonData();
	}, []);

	console.log(pokemon);

	if (loading) return "Loading...";

	let pokemonId = 3;

	if (pokemon.length > 19) return (
		<div className="App container">
			<div className="col-12">
				<h1>Pokemon API App</h1>
				<main>
					<div>
						<small>{pokemon[pokemonId].id}</small>
						<h2>{pokemon[pokemonId].name}</h2>
						<div>
							<p>{pokemon[pokemonId].types[0].type.name}</p>
						</div>
						<img src={pokemon[pokemonId].sprites.front_default} alt="" />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
