import React from "react";
import PropTypes  from "prop-types";
import {  useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase'
import { Link } from "react-router-dom";
import firebase from "firebase/app";

function GameSetup(props) {
	useFirestoreConnect([
		{ collection: "gameData" }
	]);

	const firestore = useFirestore();
	const auth = firebase.auth();

	if (!isLoaded(auth)) {
		console.log("Not loaded");
	}

	function AddGameDataToFirestore(event) {
		event.preventDefault();
		const wordCount = parseInt(event.target.words.value);
		props.onNewGameCreation(wordCount);

		if (isLoaded(auth) && (auth.currentUser != null)) {
			console.log("current user: " + auth.currentUser.uid);

			const propsToUpdate = {
				wordCount: wordCount
			}

			const query = { collection: "gameData", doc: auth.currentUser.uid.toString() };

			firestore.get(query).then((snapshot) => {
				if (snapshot.exists) {
					firestore.update(query, propsToUpdate);
				}
				else {
					firestore.collection("gameData").add(propsToUpdate);
				}
			});
		}
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