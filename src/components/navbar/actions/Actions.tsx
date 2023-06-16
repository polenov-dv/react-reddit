import React from "react";
import Button from "../../button/Button";
import "./Actions.css";

export default function Actions() {
	return (
		<div className="actions">
			<Button secondary label="LOG IN" />
			<Button label="SIGN UP" />
			<div className="profile">
				<img src="./assets/images/person-icon.svg" alt="Person" />
				<img src="./assets/images/arrow-drop-down-icon.svg" alt="Arrow-drop-down" />
			</div>
		</div>
	);
}