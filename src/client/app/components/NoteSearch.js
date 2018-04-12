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
              <div className={"row"}>
                <div className={"col-md-3 col-xs-12"}>
                  Limit: <input style={{width: 140 + 'px'}}
                                onChange={this.props.limitOnChange}
                                value={this.props.limit}/>
                </div>
                <div className={"col-md-3 col-xs-12"}>
                  Start: <input style={{width: 140 + 'px'}}
                                onChange={this.props.startOnChange}
                                value={this.props.start}/>
                </div>
                <div className={"col-md-3 col-xs-12"}>
                  Order:
                  {' '}
                  <select style={{width: 70 + 'px'}}
                          onChange={this.props.orderOnChange}
                          value={this.props.order}>
                    <option>{this.static.DESC}</option>
                    <option>{this.static.ASC}</option>
                  </select>
                </div>
                <div className={"col-md-3 col-xs-12"}>
                  <button onClick={() => this.props.onSearchMany(this.props.start, this.props.limit, this.props.order)}
                          id="add_note_button" className="btn btn-primary">View Many</button>
                </div>
                <div className={"col-md-6 col-xs-12"}>
                  Note ID: <input onChange={this.props.noteIdOnChange}
                                 value={this.props.noteId}/>
                </div>
                <div className={"col-md-6 col-xs-12"}>
                  <button onClick={() => this.props.onSearchOne(this.props.noteId)}
                          id="add_note_button" className="btn btn-primary">View One</button> <br/>
                </div>
              </div>
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