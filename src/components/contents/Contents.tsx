import React from "react";
import "./Contents.css";
import MainBar from "./main-bar/MainBar";
import SaidBar from "./said-bar/SaidBar";
import TrandingToday from "./trending-today/TrendingToday";

export default function Contents() {
	return (
		<div className="content">
			<TrandingToday />
			<div className="bars-wrapper">
				<span className="popular-posts-title">Popular posts</span>
				<div className="bars-wrapper-inside">
					<MainBar />
					<SaidBar />
				</div>
			</div>
		</div>
	);
}