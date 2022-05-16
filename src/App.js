import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/App.css";

function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		setLoading(true);

		axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
			setLoading(false);
			setPokemon(res.data.results);
		});
	}, []);

  console.log(pokemon);

	if (loading) return "Loading...";

	return (
		<div className="App container">
			<main className="col-12">
				<h1>Pokemon API App</h1>
			</main>
		</div>
	);
}

export default App;
