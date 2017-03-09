import React from "react";
import AdvTxtArea from "./AdvTxtArea";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>Note ID: {this.props.noteId.toString()} Creation Date: {this.props.noteDate}</div>
				<br/>
				<AdvTxtArea onChange={this.props.onContentChange} contents={this.props.noteContents}/>
				<br/>
				<button onClick={this.props.onClickUpdate} id="add_note_button" className="btn btn-primary">{"Update"}</button>
				<button onClick={this.props.onClickDelete} id="add_note_button" className="btn btn-primary">{"Delete"}</button>
			</div>
		);
	}
}

Note.propTypes = {
	noteId: React.PropTypes.number.isRequired,
	noteContents: React.PropTypes.string.isRequired,
	noteDate: React.PropTypes.string.isRequired,

	onClickUpdate: React.PropTypes.func.isRequired,
	onClickDelete: React.PropTypes.func.isRequired,
	onContentChange: React.PropTypes.func.isRequired
};