import React from "react";
import {connect} from "react-redux";
import Note from "../components/Note";
import {updateNote, deleteNote} from "../actions/noteActions";

class Notes extends React.Component {

	constructor() {
		super();

		this.static = {
            ASC: "ASC",
			DESC: "DESC",
			inputIDs: {
            	limit: "n_s_Limit",
				start: "n_s_Start",
				order: "n_s_Order",
                noteId: "n_s_NoteId"
			}
		};

        this.state = {
        	search: {
				limit: 1,
				start: 1,
				order: this.static.DESC,
				noteId: 1
			},
            notes: [
                {
                    noteId: 0,
                    noteContents: "",
                    noteDate: ""
                }
                ]
        };

		//Binds
        this.submitUpdateNote = this.submitUpdateNote.bind(this);
        this.submitDeleteNote = this.submitDeleteNote.bind(this);
        this.updateStates = this.updateStates.bind(this);
    }

    updateStates(inputIdStr, event){
		switch (inputIdStr)
		{
			case this.static.inputIDs.limit:
				this.setState({
					search: {
						...this.state.search,
						limit: event.target.value
					}
				});
				break;
			case this.static.inputIDs.start:
                this.setState({
                    search: {
                        ...this.state.search,
                        start: event.target.value
                    }
                });
				break;
			case this.static.inputIDs.order:
                this.setState({
                    search: {
                        ...this.state.search,
                        order: event.target.value
                    }
                });
				break;
			case this.static.inputIDs.noteId:
                this.setState({
                    search: {
                        ...this.state.search,
                        noteId: event.target.value
                    }
                });
				break;
			default:
				break;
		}
	}

    submitDeleteNote (noteId) {
        deleteNote(noteId);
    }

    submitUpdateNote (noteId, notecontents) {
		updateNote(noteId, notecontents);
	}

	render() {
		return (
			<div>
				<div className="jumbotron">
					Limit: <input onChange={(event) => this.updateStates(this.static.inputIDs.limit, event)} value={this.state.search.limit.toString()} type="number" min="1"/>{' '}
					Start: <input onChange={(event) => this.updateStates(this.static.inputIDs.start, event)} value={this.state.search.start.toString()} type="number" min="1"/>{' '}
					Order:
                    {' '}
					<select onChange={(event) => this.updateStates(this.static.inputIDs.order, event)} value={this.state.search.order}>
						<option>{this.static.DESC}</option>
						<option>{this.static.ASC}</option>
					</select>
					<button id="add_note_button" className="btn btn-primary">Search</button> <br/> <br/> <br/>
					Note ID: <input onChange={(event) => this.updateStates(this.static.inputIDs.noteId, event)} value={this.state.search.noteId.toString()} type="number" min="1"/>
					<button id="add_note_button" className="btn btn-primary">Search</button> <br/>
					<br/><hr/>
                    {
                        this.state.notes.map((item, i) => {
                            return (
								<div key={i.toString()}>
									<Note onClickDelete={this.submitDeleteNote} onClickUpdate={this.submitUpdateNote} noteId={item.noteId} noteContents={item.noteContents}
										  noteDate={item.noteDate}/>
									<hr/>
								</div>
                            )
                        })
                    }
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
        updateNote: (noteId, noteContents) => {
            dispatch(updateNote(noteId, noteContents));
        },
        deleteNote: (noteId) => {
            dispatch(deleteNote(noteId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);