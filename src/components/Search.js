import React, { useState } from "react";

const SearchPokemon = ({ getPokemon }) => {
	const [value, setValue] = useState(""); // set initial value of search input

	const handleChange = (e) => {
		setValue(e.currentTarget.value.toLowerCase());
		// value needs to be lowercase to match API format
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemon(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit} className="search">
			<label className="search__label">Enter Pokemon Name</label>
			<input
				type="text"
				onChange={handleChange}
				value={value}
				placeholder="pikachu.."
				className="search__input"
			/>
		</form>
	);
};

export default SearchPokemon;
