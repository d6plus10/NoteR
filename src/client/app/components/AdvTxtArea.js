import React from "react";

export default class AdvTxtArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea value={this.props.notetext}
                      onChange={this.props.onChange}
                      className="new_textarea"
                      placeholder="Note to self..."
                      rows="15" cols="105"
                      style={{width: 100 + '%'}}/>
        );
    }
};

AdvTxtArea.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    notetext: React.PropTypes.string.isRequired
};
