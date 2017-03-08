import React from "react";

export class Note extends React.Component {
	render() {
		return (
			<div>Note ID: {this.props.params.id}</div>
		);
	}
}