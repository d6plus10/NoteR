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
    return dispatch => {
        axios.delete("/api/note/" + id)
            .then(() => {
                dispatch({
                    type: "NOTE_DEL_DB_SUCC",
                })
            })
            .catch(() => {
                dispatch({
                    type: "NOTE_DEL_DB_FAIL",
                })
            })
    };
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

export function VN_submitSearchMany(start, limit, order) {

    //Defaults
    if (start == "" || start == undefined) {
        start = "1";
    }

    //Querystring
    var queryString = "/api/note?" + "start=" + start +"&order=" + order;

    if (limit != "" && limit != undefined) {
        queryString += "&limit=" + limit;
    }

    return dispatch => {
        axios.get(queryString)
            .then((response) => {
                dispatch({
                    type: "SEARCH_MANY_SUCC",
                    payload: response.data
                })
            })
            .catch(() => {
                dispatch({
                    type: "SEARCH_MANY_FAIL"
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
			notetext: contents
		}
    }
}


