import React from "react";
import PropTypes  from "prop-types";
import { Link } from "react-router-dom";

function GameSetup(props) {

	function AddGameDataToFirestore(event) {
		event.preventDefault();
		const wordCount = parseInt(event.target.words.value);
		props.onNewGameCreation(wordCount);
	}

	return (
		<React.Fragment>
			<h3>Setup new game</h3>

			<Link to="/signin">Sign in</Link>
			<br />
			<Link
				to="/stats"
				state={{
					gamesPlayed: 'gamesPlayed',
					gamesWon: 'gamesWon',
					gamesLost: 'gamesLost'
				}}>
				View my stats
			</Link>

			<form onSubmit={AddGameDataToFirestore}>
				<b>Word count:</b>
				<br />
				<input
					type="number"
					name="words"
					min={3}
					max={10}
					defaultValue={3}
					required={true}/>
				<br />
				<button type="submit">{"Start game"}</button>
			</form>
		</React.Fragment>
	)
}

GameSetup.propTypes = {
	onNewGameCreation : PropTypes.func
}

export default GameSetup;