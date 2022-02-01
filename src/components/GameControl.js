import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GamePlay from "./GamePlay";
import GameSetup from "./GameSetup";

class GameControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inGameSetup: true
		};
	}

	getSentence = (wordCount) => {
		const sentences = [
			"Hello beautiful world!", // 3
			"Words are very fun!", // 4
			"Words make up a sentence.", // 5
			"This is a truly incredible sentence!", // 6
			"This sentence definitely has exactly 7 words.", // 7
			"This sentence wholeheartedly has more than 5 words.", // 8
			"This is a sentence that is a bit longer...", // 9
			"Did you know, a sentence is comprised of several words?" // 10
		]

		const selectedSentence = sentences.find(x => x.split(" ").length === wordCount);
		return selectedSentence;
	}

	handleStartingNewGame = (wordCount) => {
		const { dispatch } = this.props;
		const action = {
			type: "GAME_START",
			selectedSentence: this.getSentence(wordCount)
		}
		dispatch(action);
		this.setState({ inGameSetup: false });
	}

	handleGuessingLetter = (letterGuessed) => {
		const lettersNotGuessed = this.props.lettersNotGuessed == null ? [
			"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
		] : this.props.lettersNotGuessed;
		const newLettersNotGussed = lettersNotGuessed.filter(x => x !== letterGuessed);
		let newMisses = this.props.misses == null ? 0 : this.props.misses;

		if (!this.props.selectedSentence.toUpperCase().includes(letterGuessed)) {
			newMisses = newMisses + 1;
		}

		const { dispatch } = this.props;
		const action = {
			type: "GUESS_LETTER",
			lettersNotGuessed: newLettersNotGussed,
			misses: newMisses
		}
		dispatch(action);
	}

	render() {
		let currentlyVisibleState = null;

		if (this.state.inGameSetup) {
			currentlyVisibleState = <GameSetup onNewGameCreation={this.handleStartingNewGame}  />;
		} else {
			const defaultLettersNotGuessed = [
				"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
			];
			currentlyVisibleState = <GamePlay sentence={this.props.selectedSentence} lettersNotGuessed={this.props.lettersNotGuessed || defaultLettersNotGuessed} onGuessedLetter={this.handleGuessingLetter} misses={this.props.misses || 0} />;
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
			</React.Fragment>
		)
	}
}

GameControl.propTypes = {
	selectedSentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	misses: PropTypes.number
}

const mapStateToProps = state => {
	return {
		selectedSentence: state.gameReducer.selectedSentence,
		lettersNotGuessed: state.gameplayReducer.lettersNotGuessed,
		misses: state.gameplayReducer.misses
	}
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;