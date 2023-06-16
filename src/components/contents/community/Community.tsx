import React from "react";
import "./Community.css";

import communities from "../../../data/communties/communities.json"
import Button from "../../button/Button";

export default function Community() {
	return (
		<div className="community-section">
			<div className="title">
				<span className="hoverable">Today`s Top Growing Communities</span>
			</div>
			<div>
				{communities.map((community, index) => (
					<div className="community-content hoverable">
						<span>{index + 1}</span>
						<img className="community-image" src="./assets/images/arrow-drop-up-icon.svg" alt="Arrow-drop-up" />
						<img className="community-image" src={community.image_src} alt="Community-image" />
						<span className="community-name"> /r{community.name}</span>
					</div>
				))}
			</div>
			<div className="community-actions">
				<Button primary label="VIEW ALL" />
				<div className="secondary-buttons">
					<Button tertiary label="Sports" />
					<Button tertiary label="News" />
					<Button tertiary label="Gamenig" />
					<Button tertiary label="Aww" />
				</div>
			</div>
		</div>
	);
}