//state is a default parameter, here is where I initialize states
//Reducers take a state, and an action, and create a new state for you

const noteReducer = (state = {
    id: 0,
    contents: "",
    createDate: "",
    loading: false,
    error: false
}, action) => {
	switch (action.type) {
		//Add Note action
		case "NOTE_ADD":
			console.log("Reducer state: $1", state);
			state = {
				...state,

			};
			break;
		//Add Note action fail
        case "NOTE_ADD_FAIL":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
				loading: false,
				error: action.error
            };
            break;
        //Add Note action success
        case "NOTE_ADD_SUCC":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
				error: action.error
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