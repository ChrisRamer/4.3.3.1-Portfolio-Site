import React from "react";
import PropTypes from "prop-types";

function LetterButtonList(props) {

	return (
		<div className="letterButtons">
			{props.lettersNotGuessed.map((letter, index) =>
				<button key={index} type="submit" onClick={() => props.onGuessedLetter(letter)}>{letter}</button>
			)}
		</div>
	)

}

LetterButtonList.propTypes = {
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter: PropTypes.func
}

export default LetterButtonList;