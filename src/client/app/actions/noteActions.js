import axios from "axios";

//Action which adds notes
export function addNote(strContents) {

	//console.log("Adding note: " + strContents); //DEBUG
	return dispatch => {
		axios.post("/api/note/add", {strContents: strContents})
			.then(() => {
				dispatch({type: "NOTE_ADD_SUCC", error: true})
			})
			.catch((err) => {
				dispatch({type: "NOTE_ADD_FAIL", error: false})
			})
	};
}

//Action which deletes notes
export function deleteNote(id) {
	return {
		type: "NOTE_DEL",
		payload: {
			id: id
		}
	}
}

//Action which deletes notes
export function updateNote(id, noteContents) {
    return {
        type: "NOTE_UP",
        payload: {
            id: id,
			noteContents: noteContents
        }
    }
}

//Action which deletes notes
export function getNote(id) {
    return {
        type: "NOTE_GET",
        payload: {
            id: id
        }
    }
}
