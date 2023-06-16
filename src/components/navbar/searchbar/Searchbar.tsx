import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
	return (
		<div className="searchbar">
			<label htmlFor="searchbar">
				<img src="./assets/images/search-icon.svg" alt="Search" />
			</label>
			<input id="searchbar" placeholder="Search" />
		</div>
	);
}