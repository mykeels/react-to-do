import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }

    onCompleteChange(e) {
        e.persist();
        this.props.onCompleteChange(e.target.checked)
    }

    onDestroy() {
        this.props.onDestroy(this.state.key)
    }

    render() {
        return (
            <li className={this.state.isComplete ? 'completed' : 'view'}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={this.state.isComplete} onChange={this.onCompleteChange.bind(this)} />
                    <label>{this.state.text}</label>
                    <button className="destroy" onClick={this.onDestroy.bind(this)}></button>
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
            </li>
        );
    }
}

ToDoItem.propTypes = {
    data: PropTypes.object.isRequired,
    onCompleteChange: PropTypes.func.isRequired
}

export default ToDoItem;