import React from "react";
import "./Button.css";

interface Props {
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	label: string;
}

export default function Button({ primary, secondary, tertiary, label }: Props) {
	if (tertiary) {
		return <div className="button tertiary-button hoverable">{label}</div>
	} else if (secondary) {
		return <div className="button secondary-button hoverable">{label}</div>
	} else {
		return <div className="button primary-button hoverable">{label}</div>
	}
}