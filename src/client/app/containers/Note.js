import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noteId: props.id,
			noteContents: props.noteContents,
			noteDate: props.noteDate
		}
	}
	render() {
		return (
			<div>
				<div>Note ID: {this.state.noteId}</div> <div> Creation Date: {this.state.noteDate}</div><br/>
				<textarea className="new_textarea" placeholder="Note to self..." rows="15" cols="105"/>{this.state.noteContents}<br/>
				<button id="add_note_button" className="btn btn-primary">{"Update"}</button>
				<button id="add_note_button" className="btn btn-primary">{"Delete"}</button>
			</div>

		);
	}
}

Note.propTypes = {
	noteId: React.PropTypes.number.isRequired,
	noteContents: React.PropTypes.string.isRequired,
	noteDate: React.PropTypes.string.isRequired
};