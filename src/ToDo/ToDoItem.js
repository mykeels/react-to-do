import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    onCompleteChange = (e) => {
        e.persist();
        this.props.onCompleteChange(this.props.data.key, e.target.checked)
    }

    onDestroy = () => {
        this.props.onDestroy(this.state.key)
    }

    onEditText = (e) => {
        e.persist();
        console.log(e.target.value);
        this.props.onEdit(this.props.data.key, e.target.value)
    }

    onSubmitEditText = (e) => {
        e.preventDefault();
        this.props.onSwitchView(this.props.data.key);
    }

    switchView = () => {
        this.props.onSwitchView(this.props.data.key)
    }

    render() {
        return (
            <li className={this.props.data.isComplete ? 'completed' : 'view'}>
                {!this.props.data.editText ? 
                    (
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={this.props.data.isComplete} onChange={this.onCompleteChange} />
                            <label onDoubleClick={this.switchView}>{this.props.data.text}</label>
                            <button className="destroy" onClick={this.onDestroy}></button>
                        </div>
                    ) :
                    (
                        <form onSubmit={this.onSubmitEditText}>
                            <input className="edit" value={this.props.data.text} onChange={this.onEditText} required />
                        </form>
                    )
                }
            </li>
        );
    }
}

ToDoItem.propTypes = {
    data: PropTypes.object.isRequired,
    onCompleteChange: PropTypes.func.isRequired,
    onDestroy: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onSwitchView: PropTypes.func
}

export default ToDoItem;