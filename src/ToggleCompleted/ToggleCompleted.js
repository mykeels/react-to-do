import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = false;
    }

    onChange(e) {
        e.persist();
        this.setState(state => (e.target.checked))
        this.props.onToggleChange(e.target.checked)
    }

    render() {
        return (
            <div>
                <input id="toggle-all" className="toggle-all" type="checkbox" onChange={this.onChange.bind(this)} />
                <label htmlFor="toggle-all">Mark all as complete</label>
            </div>
        )
    }
}

ToggleCompleted.propTypes = {
    onToggleChange: PropTypes.func.isRequired
}

export default ToggleCompleted;