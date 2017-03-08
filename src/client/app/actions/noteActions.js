import axios from "axios";

//Action which adds notes
export function addNote(strContents) {
	console.log("Add note was called!!!");

	return dispatch => {
		axios.post("/api/note/add", {strContents: strContents})
			.catch((err) => {
				dispatch({type: "NOTE_ADD_FAIL", payload: err})
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

/*
//Creates delayed (A-synchronous) action
return dispatch => {
	setTimeout(() => {
		dispatch( {
			type:"SET_NAME",
			payload: name
		});
	}, 2000);
}

//Promise example, something to do with connecting to a database
return {
	type: "SET_NAME",
	payload: new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(name);
		},2000);

	})
};
*/