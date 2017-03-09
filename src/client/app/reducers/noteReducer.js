//state is a default parameter, here is where I initialize states
//Reducers take a state, and an action result, and create a new state for you

export const addNoteReducer = (state = {
    id: 0,
    contents: "",
    loading: false,
    error: false
}, action) => {
	switch (action.type) {
		//Add Note -------------------------------------------
        case "NOTE_ADD_UPDATE":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
                contents: action.payload
            };
            break;
		case "NOTE_ADD_DB":
			console.log("Reducer state: $1", state);
			state = {
				...state,
				loading: true,
				error: false
			};
			break;
		//Add Note fail
        case "NOTE_ADD_DB_FAIL":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
				loading: false,
				error: true
            };
            break;
        //Add Note success
        case "NOTE_ADD_DB_SUCC":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
				loading: false,
				error: false,
				id: action.payload.id
            };
            break;
	}

	return state;
};

export const viewNoteReducer = (state = {
    notes: [
        {
            id: 1,
            contents: "",
            creationDate: ""
        }
    ],
    search : {
		limit: "",
		start: "",
		order: "DESC",
		id: ""
	},
    loading: false,
    error: false
}, action) => {
    switch (action.type) {
        //Update Note --------------------------------------
        case "NOTE_UP":
            state = {
                ...state,
            };
            break;
        //Update Note Fail
        case "NOTE_UP_FAIL":
            state = {
                ...state,
            };
            break;
        //Update Note Success
        case "NOTE_UP_SUCC":
            state = {
                ...state,
            };
            break;

        //Delete Note -------------------------------------------
        case "NOTE_DEL":
            state = {
                ...state,
            };
            break;
        case "NOTE_DEL_FAIL":
            state = {
                ...state,
            };
            break;
        case "NOTE_DEL_SUCC":
            state = {
                ...state,
            };
            break;

        //Get Note ----------------------------------------------
        case "NOTE_GET":
            state = {
                ...state,
            };
            break;
        case "NOTE_GET_FAIL":
            state = {
                ...state,
            };
            break;
        case "NOTE_GET_SUCC":
            state = {
                ...state,
            };
            break;

		//Searches ---------------------------------------------
		case "SEARCH_UP_LIMIT":
            state = {
                ...state,
				search: {
					...state.search,
					limit: action.payload
				}
            };
			break;
        case "SEARCH_UP_START":
            state = {
                ...state,
                search: {
                    ...state.search,
                    start: action.payload
                }
            };
            break;
        case "SEARCH_UP_ORDER":
            state = {
                ...state,
                search: {
                    ...state.search,
                    order: action.payload
                }
            };
            break;
        case "SEARCH_UP_ID":
            state = {
                ...state,
                search: {
                    ...state.search,
                    id: action.payload
                }
            };
            break;
    }

    return state;
};
