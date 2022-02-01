export default (state = {}, action) => {
	const { lettersNotGuessed, misses } = action;
	switch (action.type) {
		case "GUESS_LETTER":
			return Object.assign({}, state, {
				lettersNotGuessed: lettersNotGuessed,
				misses: misses
			});
		default:
			return state;
	}
}