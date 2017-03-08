import React from "react";
import {connect} from "react-redux";
import {addNote} from "../actions/noteActions";

class AddNote extends React.Component {
	constructor(props){
		super(props);
	}

	onTextChange(event) {
		this.setState({
			note: event.target.value
		});
	}

	render() {
		return (
				<div>
					<div className="jumbotron">
						<textarea onChange={this.onTextChange.bind(this)} className="new_textarea" placeholder="Note to self..." rows="15" cols="105"/>
						<br/>
						<button onClick={() => this.props.addNote(this.state.note)} id="add_note_button" className="btn btn-primary">{"Add Note"}</button>
					</div>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		note: state.note
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (textContents) => {
        	dispatch(addNote(textContents));
		}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);