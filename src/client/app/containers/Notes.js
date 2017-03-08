import React from "react";
//	import {browserHistory} from "react-router";

export class Notes extends React.Component {
	/*
	//Example on how to push a url
	onNavigateHome() {
		browserHistory.push("/home");
	}
	*/
	render() {
		return (
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
		);
	}
}