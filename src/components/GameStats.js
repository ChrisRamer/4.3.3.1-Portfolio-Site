import React from "react";
import { Link } from "react-router-dom";

function GameStats() {
	return (
		<React.Fragment>
			<h1>Total stats:</h1>
			<p>Games played: 0</p>
			<p>Games won: 0</p>
			<p>Games lost: 0</p>
			<Link to="/">Go home</Link>
		</React.Fragment>
	)
}

export default GameStats;