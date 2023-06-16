import React from "react";
import Actions from "./actions/Actions";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<Logo />
			<Searchbar />
			<Actions />
		</div>
	);
}