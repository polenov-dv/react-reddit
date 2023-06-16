import React from "react";
import Posts from "../posts/Posts";
import "./MainBar.css";

export default function MainBar() {
	return (
		<div className="main-bar">
			<div className="update-cart">
				<div className="top-section">
					<span>UPDATE FROM ANIMALRADDIT</span>
					<img className="hoverable" src="./assets/images/close-icon.svg" alt="Close" />
				</div>
				<div className="content-section hoverable">
					<div className="content-top">
						<span className="title">Keep yourself safe and informed</span>
						<br />
						<span className="description">AnimalReddit is killing third-party applications (and itself)</span>
					</div>
					<img src="./assets/images/pin.jpg" alt="Pin" />
				</div>
			</div>

			<div className="filter-container">
				<div className="hot-container filter-element hoverable">
					<img src="./assets/images/hot-icon.svg" alt="Hot" />
					<span>Hot</span>
				</div>
				<div className="filter-element hoverable">
					<span>Everywhere</span>
					<img src="./assets/images/arrow-drop-down-icon.svg" alt="Three-dots" />
				</div>
				<div className="filter-element-secondary new-container hoverable">
					<img src="./assets/images/new-release-icon.png" alt="New" />
					<span>New</span>
				</div>
				<div className="filter-element-secondary hoverable">
					<img src="./assets/images/trending-icon.svg" alt="Trending" />
					<span>Top</span>
				</div>
				<img className="filter-element-dots hoverable" src="./assets/images/three-dots-icon.svg" alt="Three-dots" />
				<div className="spacer"></div>
				<div className="filter-element-menu">
					<img className="hoverable" src="./assets/images/menu-icon.svg" alt="Menu" />
					<img className="hoverable" src="./assets/images/arrow-drop-down-icon.svg" alt="Arrow-drop-down" />
				</div>
			</div>

			<Posts />
		</div>
	);
}