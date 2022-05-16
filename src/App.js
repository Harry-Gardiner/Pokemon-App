import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";
import Card from "./components/Card";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [url, setUrl] = useState(["https://pokeapi.co/api/v2/pokemon/"]);
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();

	const getPokemonData = async () => {
		setLoading(true);
		const res = await axios.get(url);
		// console.log(res);
		setPokemonData(res.data.results);
		setNextUrl(res.data.next);
		setPrevUrl(res.data.previous);
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
	}, [url]);

	if (loading) return "Loading...";

	if (pokemon.length > 1)
		return (
			<div className="App container">
				<div className="col-12">
					<h1>Pokemon API App</h1>
					<main>
						<Card pokemonArr={pokemon}></Card>
					</main>
					<div className="pagination">
						<button
							type="button"
							onClick={() => {
								// console.log("clicked prev");
								setPokemon([]);
								setUrl(prevUrl);
							}}
						>
							Previous
						</button>
						<button
							type="button"
							onClick={() => {
								// console.log("clicked next");
								setPokemon([]);
								setUrl(nextUrl);
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		);
}

export default App;
