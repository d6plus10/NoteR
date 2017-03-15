import React from "react";
import {connect} from "react-redux";
import {AN_addNoteToDB, AN_updateNote} from "../actions/noteActions";
import AdvTxtArea from "../components/AdvTxtArea";

class AddNote extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
				<div>
					<div className="jumbotron">
						<AdvTxtArea notetext={this.props.addNoteReducer.notetext} onChange={this.props.updateNote}/>
						<br/>
						<button onClick={() => this.props.addNoteToDB(this.props.addNoteReducer.notetext)} id="add_note_button" className="btn btn-primary">{"Add Note"}</button>
					</div>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addNoteReducer: state.addNoteReducer
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNoteToDB: (textContents) => {
        	dispatch(AN_addNoteToDB(textContents));
		},
		updateNote: (event) => {
        	dispatch(AN_updateNote(event.target.value));
		}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);