import React from "react";
import { Link, useLocation } from "react-router-dom";

function GameStats() {
	const location = useLocation();
	console.log(location.state);
	// TODO: If location.state undefined, return 0 for stats
	const { gamesPlayed } = location.state;
	const { gamesWon } = location.state;
	const { gamesLost } = location.state;

	return (
		<React.Fragment>
			<h1>Total stats:</h1>
			<p>Games played: {gamesPlayed}</p>
			<p>Games won: {gamesWon}</p>
			<p>Games lost: {gamesLost}</p>
			<Link to="/">Go home</Link>
		</React.Fragment>
	)
}

export default GameStats;