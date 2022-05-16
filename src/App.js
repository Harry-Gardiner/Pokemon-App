import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";
import Grid from "./components/Grid";
import SearchPokemon from "./components/Search";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [singlePokemon, setSinglePokemon] = useState();
	const [url, setUrl] = useState(["https://pokeapi.co/api/v2/pokemon/"]);
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();

	// Get Pokemon data
	const getPokemonData = async () => {
		setLoading(true);
		const res = await axios.get(url);
		// console.log(res);
		setPokemonData(res.data.results);
		setNextUrl(res.data.next);
		setPrevUrl(res.data.previous);
		setLoading(false);
	};

	// Set Pokemon to mappable array
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

	// Get a searched for pokemon
	const getPokemon = async (name) => {
		if (!name == "")
			try {
				const singleRes = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${name}`
				);
				console.log(singleRes.data);
				setSinglePokemon(singleRes.data);
			} catch (error) {
				console.log(error.response.data.error);
				alert(`Pokemon ${name} not Found. Please check spelling`);
			}
	};

	// Run function each time URL is changed
	useEffect(() => {
		getPokemonData();
	}, [url]);

	if (loading) return "Loading...";

	if (pokemon.length > 1)
		return (
			<div className="App container">
				<div className="col-12">
					<h1>Pokemon API App</h1>
					<main>
						<SearchPokemon getPokemon={getPokemon} />
						<Grid pokemonArr={pokemon} />
					</main>
					<div className="pagination">
						<button
							type="button"
							onClick={() => {
								// console.log("clicked prev");
								setPokemon([]); // Reset pokemon data
								setUrl(prevUrl);
							}}
							disabled={prevUrl === null ? true : false}
						>
							Previous
						</button>
						<button
							type="button"
							onClick={() => {
								// console.log("clicked next");
								setPokemon([]); // Reset pokemon data
								setUrl(nextUrl);
							}}
							disabled={nextUrl === null ? true : false}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		);
}

export default App;
