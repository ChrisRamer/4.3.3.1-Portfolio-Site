import React from "react";
import PropTypes from "prop-types";
import LetterButtonList from "./LetterButtonList";
import firebase from "firebase/app";
import { isLoaded } from "react-redux-firebase";

function GameResult(props) {
	let stats = {
		gamesPlayed: props.userStats["gamesPlayed"],
		gamesWon: props.userStats["gamesWon"],
		gamesLost: props.userStats["gamesLost"]
	};

	function updateStatsInDatabase() {
		const auth = firebase.auth();

		if (isLoaded(auth)) {
			if (auth.currentUser != null) {
				const query = { collection: "gameStats", doc: auth.currentUser.uid };

				props.firestore.get(query).then((doc) => {
					if (doc.exists) {
						props.firestore.collection("gameStats").doc(auth.currentUser.uid).set(stats);
						console.log("Updated stats document for user " + auth.currentUser.uid);
					}
				});
			}
			else {
				console.log("No user is signed in, so no stats will be stored for this session.");
			}
		}
		else {
			console.log("Auth not loaded");
		}
	}

	function formatDisplayedSentence() {
		let sentence = props.sentence.toLowerCase().replaceAll(' ', "\xa0\xa0");

		props.lettersNotGuessed.map((letter) =>
			sentence = sentence.replaceAll(letter.toLowerCase(), " _ ")
		)

		return sentence[0].toUpperCase() + sentence.slice(1);
	}

	function getResult() {
		if (props.misses < 6) {
			const sentence = formatDisplayedSentence();

			if (!sentence.includes("_")) {
				stats["gamesWon"] += 1;
				stats["gamesPlayed"] += 1;
				updateStatsInDatabase();

				return <div className="panel">
					<p>{sentence}</p>
					<p>You won!</p>
				</div>
			}

			return <div className="panel">
				<p>{sentence}</p>
				<LetterButtonList lettersNotGuessed={props.lettersNotGuessed} onGuessedLetter={props.onGuessedLetter} />
			</div>
		} else {
			stats["gamesLost"] += 1;
			stats["gamesPlayed"] += 1;
			updateStatsInDatabase();

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
	firestore: PropTypes.object,
	userStats: PropTypes.object,
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter: PropTypes.func,
	misses: PropTypes.number
}

export default GameResult;