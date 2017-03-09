import React from "react";
//	import {connect} from "react-redux";
import Note from "./Note";

export default class Notes extends React.Component {
	constructor() {
		super();
        this.state = {
            notes: [
                {
                    noteId: 0,
                    noteContents: "",
                    noteDate: ""
                }
                ]
        };
    }

	render() {
		return (
			<div>
				<div className="jumbotron">
					Limit: <input type="number" min="1"/>{' '}
					Start: <input type="number" min="1"/>{' '}
					Order:
                    {' '}
					<select>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</select>
					<button id="search_notes_button" className="btn btn-primary">Search</button>
				</div>
				<br/>
                {
                    this.state.notes.map((item) => {
						return (
							<div key={item.noteId}>
							<Note noteId={item.noteId} noteContents={item.noteContents}
								  noteDate={item.noteDate}/>
							<br/>
							</div>
						)
                    })
                }

			</div>

		);
	}
}