import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EntryComponent extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form action="" onSubmit={this.props.onEntrySubmit}>
                    <input className="new-todo" placeholder="What needs to be done?" value={this.props.text} 
                            onChange={this.props.onTextChange} required autoFocus />
                </form>
            </header>
                );
    }
}

EntryComponent.propTypes = {
    text: PropTypes.string.isRequired,
    onEntrySubmit: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired
}

EntryComponent.defaultProps = {
    text: ""
}

export default EntryComponent;