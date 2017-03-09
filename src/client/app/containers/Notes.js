import React from "react";
import {connect} from "react-redux";

import Note from "../components/Note";
import NoteSearch from "../components/NoteSearch";

import {updateNote, deleteNote, VN_updateSearchLimit, VN_updateSearchOrder, VN_updateSearchStart, VN_updateSearchId,
VN_updateSpecificNote, VN_submitSearchOne} from "../actions/noteActions";

class Notes extends React.Component {

	constructor() {
		super();
    }

	render() {
		return (
			<div>
				<div className="jumbotron">

					<NoteSearch limit={this.props.viewNoteReducer.search.limit}
								limitOnChange={this.props.updateSearchLimit}

								start={this.props.viewNoteReducer.search.start}
								startOnChange={this.props.updateSearchStart}

								order={this.props.viewNoteReducer.search.order}
								orderOnChange={this.props.updateSearchOrder}

								noteId={this.props.viewNoteReducer.search.id}
								noteIdOnChange={this.props.updateSearchId}

								onSearchOne={this.props.submitSearchOne}
								onSearchMany={this.props.submitSearchMany}
					/>

					<br/><hr/>
                    {
                        this.props.viewNoteReducer.notes.map((item, i) => {
                            return (
								<div key={i.toString()}>
									<Note
										noteId={this.props.viewNoteReducer.notes[i].id}
										noteDate={this.props.viewNoteReducer.notes[i].creationDate}

										onClickUpdate={this.props.tempOne}
										onClickDelete={this.props.tempTwo}

										whichNoteInStore={i}

										noteContents={this.props.viewNoteReducer.notes[i].contents}
										onContentChange={(event) => this.props.updateSpecificNote(event, i)}
									/>
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
        viewNoteReducer: state.viewNoteReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
		tempOne: () => {

		},
        tempTwo: () => {

        },

		updateSearchLimit: (event) => {
            dispatch(VN_updateSearchLimit(event.target.value));
		},
        updateSearchStart: (event) => {
            dispatch(VN_updateSearchStart(event.target.value));
        },
        updateSearchOrder: (event) => {
            dispatch(VN_updateSearchOrder(event.target.value));
        },
        updateSearchId: (event) => {
            dispatch(VN_updateSearchId(event.target.value));
        },

		submitSearchMany: (start, limit, order) => {
        	dispatch();
		},
		submitSearchOne: (id) => {
            dispatch(VN_submitSearchOne(id));
        },

        updateSpecificNote: (event, i) => {
            dispatch(VN_updateSpecificNote(i, event.target.value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);