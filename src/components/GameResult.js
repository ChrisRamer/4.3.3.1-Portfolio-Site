import React from "react";
import PropTypes from "prop-types";
import LetterButtonList from "./LetterButtonList";

function GameResult(props) {
	console.log(props.userStats);

	function formatDisplayedSentence() {
		let sentence = props.sentence.toLowerCase().replaceAll(' ', "\xa0\xa0");

		props.lettersNotGuessed.map((letter) =>
			sentence = sentence.replaceAll(letter.toLowerCase(), " _ ")
		)

		return sentence[0].toUpperCase() + sentence.slice(1);
	}

	function getResult() {
		if (props.misses < 6) {
			return <div className="panel">
				<p>{formatDisplayedSentence()}</p>
				<LetterButtonList lettersNotGuessed={props.lettersNotGuessed} onGuessedLetter={props.onGuessedLetter} />
			</div>
		} else {
			return <div className="panel">
				<p>Ohno! You lost!</p>
				<p>The sentence was <b>{props.sentence}</b></p>
			</div>
		}
	}

	const currentlyVisibleState = getResult();

	return (
		<React.Fragment>
			{currentlyVisibleState}
		</React.Fragment>
	)
}

GameResult.propTypes = {
	userStats: PropTypes.object,
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter: PropTypes.func,
	misses: PropTypes.number
}

export default GameResult;