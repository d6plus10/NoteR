import React from "react";

export default class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.static = {
            ASC: "ASC",
            DESC: "DESC",
        };
    }

    render() {
        return (
            <div>
                Limit: <input onChange={this.props.limitOnChange}
                              value={this.props.limit}
                              type="number" min="1"/>{' '}
                Start: <input onChange={this.props.startOnChange}
                              value={this.props.start}
                              type="number" min="1"/>{' '}
                Order:
                {' '}
                <select onChange={this.props.orderOnChange}
                        value={this.props.order}>
                    <option>{this.static.DESC}</option>
                    <option>{this.static.ASC}</option>
                </select>

                <button onClick={() => this.props.onSearchMany(this.props.start, this.props.limit, this.props.order)}
                        id="add_note_button" className="btn btn-primary">View Many</button> <br/> <br/> <br/>
                Note ID: <input onChange={this.props.noteIdOnChange}
                                value={this.props.noteId}
                                type="number"
                                min="1"/>

                <button onClick={() => this.props.onSearchOne(this.props.noteId)}
                    id="add_note_button" className="btn btn-primary">View One</button> <br/>
            </div>
        );
    }

};

NoteSearch.propTypes = {
    limit: React.PropTypes.string.isRequired,
    limitOnChange: React.PropTypes.func.isRequired,
    start: React.PropTypes.string.isRequired,
    startOnChange: React.PropTypes.func.isRequired,
    order: React.PropTypes.string.isRequired,
    orderOnChange: React.PropTypes.func.isRequired,
    onSearchMany: React.PropTypes.func.isRequired,

    noteId: React.PropTypes.string.isRequired,
    noteIdOnChange: React.PropTypes.func.isRequired,
    onSearchOne: React.PropTypes.func.isRequired
};