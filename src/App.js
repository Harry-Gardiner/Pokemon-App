import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";
import Card from "./components/Card";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);

	const getPokemonData = async () => {
		setLoading(true);
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
		setPokemonData(res.data.results);
		setLoading(false);
	};

	const setPokemonData = async (res) => {
		res.map(async (item) => {
			const result = await axios.get(item.url);
			setPokemon((state) => {
				state = [...state, result.data];
				state.sort((a, b) => (a.id > b.id ? 1 : -1));
				return state;
			});
		});
	};

	useEffect(() => {
		getPokemonData();
	}, []);

	if (loading) return "Loading...";

	if (pokemon.length > 1)
		return (
			<div className="App container">
				<div className="col-12">
					<h1>Pokemon API App</h1>
					<main>
						<Card pokemonArr={pokemon}></Card>
					</main>
				</div>
			</div>
		);
}

export default App;
