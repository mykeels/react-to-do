import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }

    render() {
        return (
            <li className={this.state.isComplete ? 'completed' : 'view'}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={this.state.isComplete} />
                    <label>{this.state.text}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
            </li>
        );
    }
}

ToDoItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default ToDoItem;