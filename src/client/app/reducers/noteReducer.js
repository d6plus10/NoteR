//state is a default parameter, here is where I initialize states
//Reducers take a state, and an action, and create a new state for you

const noteReducer = (state = {
	id: 1,
	contents: "New note",
	createDate: "Replace this with an initial date",
	error: "None"
}, action) => {
	switch (action.type) {
		//Add Note action
		case "NOTE_ADD":
			console.log("Reducer state: $1", state);
			state = {
				...state,
				contents: action.payload.contents
			};
			break;
		//Add Note action fail
        case "NOTE_ADD_FAIL":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
                contents: action.payload.contents
            };
            break;
		//Delete Note action
		case "NOTE_DELETE":
				state = {
				...state,
					error: action.payload
			};
			break;
	}

	return state;
};

export default noteReducer;