import React from "react";
import {connect} from "react-redux";

import Note from "../components/Note";
import NoteSearch from "../components/NoteSearch";

import {updateNote, deleteNote, VN_updateSearchLimit, VN_updateSearchOrder, VN_updateSearchStart, VN_updateSearchId} from "../actions/noteActions";

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

								onSearchOne={() => this.props.submitSearchOne(this.props.viewNoteReducer.search.id)}
								onSearchMany={() => this.props.submitSearchMany(this.props.viewNoteReducer.search.start, this.props.viewNoteReducer.search.limit, this.props.viewNoteReducer.search.order)}
					/>

					<br/><hr/>
				</div>
			</div>
		);
	}
}
/*

 {
 this.state.notes.map((item, i) => {
 return (
 <div key={i.toString()}>
 <Note
 noteId={}
 noteContents={}
 noteDate={}
 onClickUpdate={}
 onClickDelete={}
 onContentChange={}
 />
 <hr/>
 </div>
 )
 })
 }
 */

const mapStateToProps = (state) => {
    return {
        viewNoteReducer: state.viewNoteReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNoteInDB: (textContents) => {
            dispatch();
        },
        deleteNoteFromDB: (textContents) => {
            dispatch();
        },
		getNoteFromDB: (noteId) => {
			dispatch();
		},
        updateNoteInList: (event) => {
            dispatch();
        },
        deleteNoteInList: (event) => {
            dispatch();
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
            dispatch();
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);