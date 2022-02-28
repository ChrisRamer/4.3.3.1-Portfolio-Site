import React from "react";
import { useLocation } from "react-router-dom";

function GameStats() {
	const location = useLocation();

	if (location != null) {
		const { stats } = location.state;
		const gamesPlayed = stats["gamesPlayed"];
		const gamesWon = stats["gamesWon"];
		const gamesLost = stats["gamesLost"];

		return (
			<React.Fragment>
				<h2>Your stats:</h2>
				<p>Games played: {gamesPlayed}</p>
				<p>Games won: {gamesWon}</p>
				<p>Games lost: {gamesLost}</p>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<p>You must be signed in to view your stats!</p>
			</React.Fragment>
		)
	}
}

export default GameStats;