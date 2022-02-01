import gameReducer from "./game-reducer";
import gameplayReducer from "./gameplay-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	gameReducer: gameReducer,
	gameplayReducer: gameplayReducer,
	firestore: firestoreReducer
});

export default rootReducer;