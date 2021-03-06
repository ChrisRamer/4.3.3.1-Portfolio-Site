import React from "react";
import PropTypes from "prop-types";
import GameResult from "./GameResult";
import Image from "./Image";

function GamePlay(props) {

	return (
		<React.Fragment>
			<div className="gameplay">
				<Image misses={props.misses} />
				<GameResult sentence={props.sentence} lettersNotGuessed={props.lettersNotGuessed} onGuessedLetter={props.onGuessedLetter} misses={props.misses} />
			</div>
		</React.Fragment>
	)

}

GamePlay.propTypes = {
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter : PropTypes.func,
	misses : PropTypes.number
}

export default GamePlay;