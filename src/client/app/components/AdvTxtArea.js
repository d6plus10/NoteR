import React from "react";

export default class AdvTxtArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea value={this.props.contents}
                      onChange={this.props.onChange}
                      className="new_textarea"
                      placeholder="Note to self..."
                      rows="15" cols="105"/>
        );
    }

};

AdvTxtArea.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    contents: React.PropTypes.string.isRequired
};