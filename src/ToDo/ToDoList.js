import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem.js';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }

    render() {
        return (
            <ul className="todo-list">
                {this.state.list.map(item => <ToDoItem data={item} />)}
            </ul>
            );
    }
}

ToDoList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ToDoList;