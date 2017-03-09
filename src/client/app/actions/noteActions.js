import axios from "axios";

// ADD NOTE SCREEN ------------------------------------------------------------------------
//Action which adds notes
export function AN_addNoteToDB(strContents) {

	//console.log("Adding note: " + strContents); //DEBUG
	return dispatch => {
		axios.post("/api/note/add", {strContents: strContents})
			.then((response) => {
				dispatch({
					type: "NOTE_ADD_SUCC",
					payload: {
						id: response
					}
				})
			})
			.catch(() => {
				dispatch({
					type: "NOTE_ADD_FAIL"
				})
			})
	};
}

export function AN_updateNote(contents) {
	return {
		type: "NOTE_ADD_UPDATE",
		payload: contents
	}
}



//VIEW NOTE SCREEN ---------------------------------------------------------------------------

//Action which deletes notes
export function VN_deleteNoteInDB(id) {
	return {
		type: "NOTE_DEL",
	}
}

//Action which deletes notes
export function VN_updateNoteInDB(id, noteContents) {
    return {
        type: "NOTE_UP",
    }
}

//Action which deletes notes
export function VN_getNote(id) {
    return {
        type: "NOTE_GET",
    }
}

//Search updates
export function VN_updateSearchLimit(limit) {
	return {
		type: "SEARCH_UP_LIMIT",
		payload: limit
	}
}
export function VN_updateSearchStart(start) {
    return {
        type: "SEARCH_UP_START",
		payload: start
    }
}
export function VN_updateSearchOrder(order) {
    return {
        type: "SEARCH_UP_ORDER",
		payload: order
    }
}
export function VN_updateSearchId(id) {
    return {
        type: "SEARCH_UP_ID",
        payload: id
    }
}


