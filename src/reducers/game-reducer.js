export default (state = {}, action) => {
	const { selectedSentence } = action;
	switch (action.type) {
		case "GAME_START":
			return Object.assign({}, state, {
				selectedSentence: selectedSentence
			});
		default:
			return state;
	}
}