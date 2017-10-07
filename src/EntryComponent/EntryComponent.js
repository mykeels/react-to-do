import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EntryComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            text: props.text
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onEntrySubmit(this.state.text);
    }

    onTextChange(e) {
        e.persist();
        this.setState(state => ({
            text: e.target.value
        }))
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <input className="new-todo" placeholder="What needs to be done?" onChange={this.onTextChange.bind(this)} required autoFocus />
                </form>
            </header>
                );
    }
}

EntryComponent.propTypes = {
    text: PropTypes.string,
    onEntrySubmit: PropTypes.func.isRequired
}

EntryComponent.defaultProps = {
    text: ""
}

export default EntryComponent;