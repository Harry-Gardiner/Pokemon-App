import React, { useState } from "react";

/**
 * Component handling the search input
 *
 * Takes an array of objects
 */
const SearchPokemon = ({ getPokemon }) => {
	const [value, setValue] = useState(""); // set initial value of search input

	// Track input
	const handleChange = (e) => {
		setValue(e.currentTarget.value.toLowerCase());
		// value needs to be lowercase to match API format
	};

	// Pass up pokemon value and clear input
	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemon(value);
		setValue("");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="search">
				<p>Enter Pokemon Name</p>
				<div className="search__container">
					<input
						type="text"
						onChange={handleChange}
						value={value}
						placeholder="pikachu.."
						className="search__input"
					/>
					<button
						type="submit"
						className="search__button"
						disabled={value == "" ? true : false}
					>
						Search
					</button>
				</div>
			</form>
		</>
	);
};

export default SearchPokemon;
