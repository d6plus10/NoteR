import React from "react";
import AdvTxtArea from "./AdvTxtArea";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>  <font size="6">Note ID:</font> <font size="4">{this.props.noteId}</font> <font size="6">Creation Date:</font> <font size="4">{this.props.noteDate}</font></div>
				<br/>
				<AdvTxtArea onChange={this.props.onContentChange} notetext={this.props.noteContents}/>
				<br/>
				<button onClick={() => this.props.onClickUpdate(this.props.noteId, this.props.noteContents)} id="add_note_button" className="btn btn-primary">{"Update"}</button>
				<button onClick={() => this.props.onClickDelete(this.props.noteId)} id="add_note_button" className="btn btn-primary">{"Delete"}</button>
			</div>
		);
	}
}

Note.propTypes = {
	whichNoteInStore: React.PropTypes.number.isRequired,

	noteId: React.PropTypes.string.isRequired,
	noteContents: React.PropTypes.string.isRequired,
	noteDate: React.PropTypes.string.isRequired,

	onClickUpdate: React.PropTypes.func.isRequired,
	onClickDelete: React.PropTypes.func.isRequired,
	onContentChange: React.PropTypes.func.isRequired
};