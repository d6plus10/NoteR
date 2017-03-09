import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noteId: props.noteId,
			noteContents: props.noteContents,
			noteDate: props.noteDate
		};

        this.updateTextArea = this.updateTextArea.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
	}

	updateTextArea(event) {
		this.setState({
			noteContents: event.target.value
		})
	}

	submitDelete() {
		this.props.onClickDelete(this.state.noteId);
	}

	submitUpdate() {
		this.props.onClickUpdate(this.state.noteId, this.state.noteContents);
	}

	render() {
		return (
			<div>
				<div>Note ID: {this.state.noteId.toString()} Creation Date: {this.state.noteDate}</div><br/>
				<textarea value={this.state.noteContents} className="new_textarea" placeholder="Note to self..." rows="15" cols="105"/> <br/>
				<button onClick={this.submitUpdate} id="add_note_button" className="btn btn-primary">{"Update"}</button>
				<button onClick={this.submitDelete} id="add_note_button" className="btn btn-primary">{"Delete"}</button>
			</div>

		);
	}
}

Note.propTypes = {
	noteId: React.PropTypes.number.isRequired,
	noteContents: React.PropTypes.string.isRequired,
	noteDate: React.PropTypes.string.isRequired,
	onClickUpdate: React.PropTypes.func.isRequired,
	onClickDelete: React.PropTypes.func.isRequired
};