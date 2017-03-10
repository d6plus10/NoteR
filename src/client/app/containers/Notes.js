import React from "react";
import {connect} from "react-redux";

import Note from "../components/Note";
import NoteSearch from "../components/NoteSearch";

import {updateNote, deleteNote, VN_updateSearchLimit, VN_updateSearchOrder, VN_updateSearchStart, VN_updateSearchId,
    VN_updateSpecificNote, VN_submitSearchOne, VN_updateNoteInDB} from "../actions/noteActions";

class Notes extends React.Component {

	constructor(props) {
		super(props);
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
								<div key={i}>
									<Note
										noteId={this.props.viewNoteReducer.notes[i].id}
										noteDate={this.props.viewNoteReducer.notes[i].creationDate}
                                        noteContents={this.props.viewNoteReducer.notes[i].contents}

										onClickUpdate={this.props.updateNoteInDB}
										onClickDelete={this.props.deleteNoteInDB}

										whichNoteInStore={i}

										onContentChange={(event) => this.props.updateSpecificNote(i, event)}
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
        //Database related
        updateNoteInDB: (id, contents) => {
            dispatch(VN_updateNoteInDB(id, contents));
        },

        deleteNoteInDB: (id) => {

        },

        submitSearchMany: (start, limit, order) => {
            dispatch();
        },

        submitSearchOne: (id) => {
            dispatch(VN_submitSearchOne(id));
        },

        //State related
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
        updateSpecificNote: (i, event) => {
            console.log("i: " + i.toString(), ", event: " + event.target.value);   //Debug

            dispatch(VN_updateSpecificNote(i, event.target.value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);