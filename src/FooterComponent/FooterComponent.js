import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = props.state
    }

    countItemsLeft() {
        return this.state.list.filter(item => !item.isComplete).length;
    }

    clearCompletedItems() {
        this.setState(state => {
            state.list = state.list.filter(item => !item.isComplete);
            this.props.onModifyState(state);
            return state;
        })
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.countItemsLeft()}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.clearCompletedItems.bind(this)}>Clear completed</button>
          </footer>
        );
    }
}

FooterComponent.propTypes = {
    state: PropTypes.object.isRequired,
    onModifyState: PropTypes.func.isRequired
}

export default FooterComponent;