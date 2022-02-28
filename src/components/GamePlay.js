import React from "react";
import PropTypes from "prop-types";
import GameResult from "./GameResult";
import Image from "./Image";

function GamePlay(props) {

	return (
		<React.Fragment>
			<div className="gameplay">
				<Image misses={props.misses} />
				<GameResult firestore={props.firestore} isSignedIn={props.isSignedIn} userStats={props.userStats} sentence={props.sentence} lettersNotGuessed={props.lettersNotGuessed} onGuessedLetter={props.onGuessedLetter} misses={props.misses} />
			</div>
		</React.Fragment>
	)

}

GamePlay.propTypes = {
	firestore: PropTypes.object,
	isSignedIn: PropTypes.bool,
	userStats: PropTypes.object,
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter : PropTypes.func,
	misses : PropTypes.number
}

export default GamePlay;