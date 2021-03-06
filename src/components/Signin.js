import React from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function Signin() {
	function doSignUp(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
			console.log("Successfully signed up!");
		}).catch(function(error) {
			console.log(error.message);
		})
	}

	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
			console.log("Successfully signed in!");
		}).catch(function(error) {
			console.log(error.message);
		})
	}

	function doSignOut() {
		firebase.auth().signOut().then(function() {
			console.log("Successfully signed out!");
		}).catch(function(error) {
			console.log(error.message);
		})
	}

	return (
		<React.Fragment>
			<h1>Sign up</h1>
			<form onSubmit={doSignUp}>
				<input
					type="text"
					name="email"
					placeholder="email" />
				<input
					type="text"
					name="password"
					placeholder="password" />
				<button type="submit">Sign up</button>
			</form>

			<h1>Sign in</h1>
			<form onSubmit={doSignIn}>
				<input
					type="text"
					name="email"
					placeholder="email" />
				<input
					type="password"
					name="password"
					placeholder="password" />
				<button type="submit">Sign in</button>
			</form>

			<h1>Sign out</h1>
			<button onClick={doSignOut}>Sign out</button>
			<br />
			<Link to="/">Go home</Link>
		</React.Fragment>
	);
}

export default Signin