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

    onEditText(e) {
        e.persist();
        console.log(e.target.value);
        this.setState(state => {
            state.text = e.target.value;
            return state;
        })
    }

    onSubmitEditText(e) {
        e.preventDefault();
        this.props.onEdit(this.state.key, this.state.text)
        this.switchView();
    }

    switchView() {
        this.setState(state => {
            state.editText = !state.editText;
            return state;
        })
    }

    render() {
        return (
            <li className={this.state.isComplete ? 'completed' : 'view'}>
                {!this.state.editText ? 
                    (
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={this.state.isComplete} onChange={this.onCompleteChange.bind(this)} />
                            <label onDoubleClick={this.switchView.bind(this)}>{this.state.text}</label>
                            <button className="destroy" onClick={this.onDestroy.bind(this)}></button>
                        </div>
                    ) :
                    (
                        <form onSubmit={this.onSubmitEditText.bind(this)}>
                            <input className="edit" value={this.state.text} onChange={this.onEditText.bind(this)} required />
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
    onEdit: PropTypes.func.isRequired
}

export default ToDoItem;