import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleCompleted extends Component {
    render() {
        return (
            <div>
                <input id="toggle-all" className="toggle-all" type="checkbox" checked={this.props.value} onChange={this.props.onToggleChange} />
                <label htmlFor="toggle-all">Mark all as complete</label>
            </div>
        )
    }
}

ToggleCompleted.propTypes = {
    onToggleChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired
}

export default ToggleCompleted;