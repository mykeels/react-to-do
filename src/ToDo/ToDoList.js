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

    onChildCompleteChangeHandler(index, isComplete) {
        this.setState(state => {
            state.list.forEach((item, i) => {
                if (i == index) {
                    item.isComplete = isComplete;
                }
            })
            return state;
        })
    }

    render() {
        return (
            <ul className="todo-list">
                {this.state.list.map((item, index) => <ToDoItem data={item} index={index} onCompleteChange={this.onChildCompleteChangeHandler.bind(this, index)} />)}
            </ul>
            );
    }
}

ToDoList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ToDoList;