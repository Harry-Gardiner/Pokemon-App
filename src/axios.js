import axios from "axios";

// Base URL
export default axios.create({
	baseURL: "https://pokeapi.co/api/v2/pokemon/",
	headers: {
		// make sure we get JSON back
		Accept: "application/json",
	},
});
