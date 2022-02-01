import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import Footer from "./Footer";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/signin">
					<Signin />
				</Route>
				<Route path="/">
					<GameControl />
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App;