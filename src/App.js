import React, { Component } from 'react';
import EntryComponent from './EntryComponent/EntryComponent.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "all",
      list: [{
        text: "Tell babe I'm sorry",
        isComplete: false
      }]
    }
  }

  onEntrySubmitHandler(text) {
    console.log("submitted entry ", text)
  }

  render() {
    return (
      <section className="todoapp">
          <EntryComponent onEntrySubmit={this.onEntrySubmitHandler.bind(this)} />
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Taste JavaScript</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Buy a unicorn</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Rule the web" />
              </li>
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count"><strong>0</strong> item left</span>
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
            <button className="clear-completed">Clear completed</button>
          </footer>
		    </section>
    );
  }
}

export default App;
