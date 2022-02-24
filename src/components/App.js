import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import Footer from "./Footer";
import Signin from "./Signin";
import GameStats from "./GameStats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase'

function App() {
	useFirestoreConnect([
		{ collection: "gameStats" }
	]);

	const firestore = useFirestore();

	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/signin">
					<Signin />
				</Route>
				<Route path="/stats">
					<GameStats />
				</Route>
				<Route path="/">
					<GameControl firestore={firestore}/>
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App;