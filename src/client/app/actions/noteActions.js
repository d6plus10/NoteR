import axios from "axios";

//Action which adds notes
export function addNote(strContents) {

	//console.log("Adding note: " + strContents); //DEBUG

	return dispatch => {
		axios.post("/api/note/add", {strContents: strContents})
			.then(() => {
				dispatch({type: "NOTE_ADD_SUCC"})
			})
			.catch((err) => {
				dispatch({type: "NOTE_ADD_FAIL"})
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