//state is a default parameter, here is where I initialize states
//Reducers take a state, and an action result, and create a new state for you

export const addNoteReducer = (state = {
    id: 0,
    notetext: "",
}, action) => {
	switch (action.type) {
		//Add Note -------------------------------------------
        case "NOTE_ADD_UPDATE":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
                notetext: action.payload
            };
            break;
		case "NOTE_ADD_DB":
			console.log("Reducer state: $1", state);
			state = {
				...state,
			};
			break;
		//Add Note fail
        case "NOTE_ADD_DB_FAIL":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
            };
            alert("Could not add note");
            break;
        //Add Note success
        case "NOTE_ADD_DB_SUCC":
            console.log("Reducer state: $1", state);
            state = {
                ...state,
				id: action.payload.id,
                notetext: ""
            };
            alert("Note: #" + action.payload.id + " successfully added");
            break;
	}
	return state;
};

export const viewNoteReducer = (state = {
    notes: [],
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
        case "NOTE_UP_DB":
            state = {
                ...state,
            };
            break;
        //Update Note Fail
        case "NOTE_UP_DB_FAIL":
            state = {
                ...state,
            };
            alert("Note update failed");
            break;
        //Update Note Success
        case "NOTE_UP_DB_SUCC":
            state = {
                ...state,
            };
            alert("Note updated");
            break;

        //Delete Note -------------------------------------------
        case "NOTE_DEL_DB":
            state = {
                ...state,
            };
            break;
        case "NOTE_DEL_DB_FAIL":
            state = {
                ...state,
            };
            alert("Could not delete note");
            break;
        case "NOTE_DEL_DB_SUCC":
            state = {
                ...state,
            };
            alert("Note has been deleted");
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
		// List Updates -----------------------------------------------
        case "LIST_UP_NOTE":
            state = {
                ...state,
            };
            //Updates note at specific index
            state.notes[action.payload.index] = {
                ...state.notes[action.payload.index],
                notetext: action.payload.notetext
            };
			break;

		//Search Submits ------------------------------------------------
		case "SEARCH_ONE":
			state = {
				...state
			};
			break;
        case "SEARCH_ONE_SUCC":
            state = {
                ...state
            };
			//Add note to first array spot
            state.notes = [];
			state.notes.push({
                id: action.payload.id,
                notetext: action.payload.notetext,
                dateadded: action.payload.dateadded
			});
            break;
        case "SEARCH_ONE_FAIL":
            state = {
                ...state
            };
            alert("Could not find note; does not exist");
            break;

        case "SEARCH_MANY":
            state = {
                ...state
            };
            break;
        case "SEARCH_MANY_SUCC":
            state = {
                ...state,
                notes: action.payload
            };

            break;
        case "SEARCH_MANY_FAIL":
            state = {
                ...state
            };
            alert("Could not get notes");
            break;
        case "NOTHING":
        default:
            state = {
                ...state
            };
            break;
    }

    return state;
};
