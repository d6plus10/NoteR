import axios from "axios";

// ADD NOTE SCREEN ------------------------------------------------------------------------
//Action which adds notes
export function AN_addNoteToDB(strContents) {

	return dispatch => {
		axios.post("/api/note/add", {strContents: strContents})
			.then((response) => {
				dispatch({
					type: "NOTE_ADD_DB_SUCC",
					payload: {
						id: response.data.id
					}
				})
			})
			.catch(() => {
				dispatch({
					type: "NOTE_ADD_DB_FAIL",
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

//Action which deletes notes in db
export function VN_deleteNoteInDB(id) {
	return {
		type: "NOTE_DEL",
	}
}

//Action which deletes notes in db
export function VN_updateNoteInDB(id, strContents) {
    return dispatch => {
        axios.put("/api/note/" + id, {strContents: strContents})
            .then(() => {
                dispatch({
                    type: "NOTE_UP_DB_SUCC",
                })
            })
            .catch(() => {
                dispatch({
                    type: "NOTE_UP_DB_FAIL",
                })
            })
    };
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

//Search Submits
export function VN_submitSearchOne(id) {
    return dispatch => {
        axios.get("/api/note/" + id.toString())
            .then((response) => {
                dispatch({
                    type: "SEARCH_ONE_SUCC",
                    payload: response.data
                })
            })
            .catch(() => {
                dispatch({
                    type: "SEARCH_ONE_FAIL"
                })
            })
    };
}

//Updates specific note in list
export function VN_updateSpecificNote(index, contents) {
    console.log("NUMBER 2 i: " + index.toString(), ", event: " + contents);   //Debug

    return {
        type: "LIST_UP_NOTE",
        payload: {
        	index: index,
			contents: contents
		}
    }
}


