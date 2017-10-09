import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.itemsLeftCount}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className={this.props.activeTab === "all" ? "selected" : ""} onClick={this.props.onSelectTab} 
                            data-value="all" href="#/">All</a>
                    </li>
                    <li>
                        <a className={this.props.activeTab === "active" ? "selected" : ""} onClick={this.props.onSelectTab} 
                            data-value="active" href="#/active">Active</a>
                    </li>
                    <li>
                        <a className={this.props.activeTab === "completed" ? "selected" : ""} onClick={this.props.onSelectTab} 
                            data-value="completed" href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.props.onClearCompletedItems}>Clear completed</button>
          </footer>
        );
    }
}

FooterComponent.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onSelectTab: PropTypes.func.isRequired,
    onClearCompletedItems: PropTypes.func.isRequired,
    itemsLeftCount: PropTypes.number.isRequired,
}

export default FooterComponent;