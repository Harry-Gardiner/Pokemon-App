import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";
import Grid from "./components/Grid";
import SearchPokemon from "./components/Search";
import PokemonModal from "./components/Modal";
import Favourites from "./components/Favourites";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [singlePokemon, setSinglePokemon] = useState({});
	const [url, setUrl] = useState(["https://pokeapi.co/api/v2/pokemon/"]);
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();
	const [showModal, setShowModal] = useState(false);
	const [favs, setFavs] = useState(() => {
		// getting local stored array
		const saved = localStorage.getItem("Favpokemon");
		const initialValue = JSON.parse(saved);
		return initialValue || [];
	});

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
				// console.log(singleRes);
				setSinglePokemon(singleRes.data);
				setShowModal(true);
			} catch (error) {
				console.log(error.response.data.error);
				alert(`Pokemon ${name} not Found. Please check spelling`);
			}
	};

	// Handle modal state change
	const handleModalState = () => {
		setShowModal(false);
		// console.log("clicked");
	};

	// Handler to add pokemon to favs
	const addToFavorite = (id) => {
		const data = pokemon.find((item) => item.id === id);
		// console.log(data);
		setFavs([...favs, data]);
	};

	// console.log(favs);
	// console.log(favs.length);

	// Run function each time URL is changed
	useEffect(() => {
		getPokemonData();
	}, [url]);

	useEffect(() => {
		// storing input name
		localStorage.setItem("Favpokemon", JSON.stringify(favs));
	}, [favs]);

	if (loading) return "Loading...";

	if (pokemon.length > 1)
		return (
			<div className="App container">
				<div className="col-12">
					<h1>Pokemon API App</h1>
					<main>
						<SearchPokemon getPokemon={getPokemon} />

						<Favourites favs={favs} />

						{Object.keys(singlePokemon).length !== 0 && showModal ? (
							<PokemonModal
								singlePokemonData={singlePokemon}
								setShowModal={handleModalState}
							/>
						) : null}

						<Grid pokemonArr={pokemon} addFav={addToFavorite} favs={favs} />

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
					</main>
				</div>
			</div>
		);
}

export default App;
