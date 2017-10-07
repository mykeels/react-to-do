import React, { Component } from 'react'
import EntryComponent from './EntryComponent/EntryComponent.js'
import ToggleComponent from './ToggleCompleted/ToggleCompleted.js'
import ToDoList from './ToDo/ToDoList.js'
import ToDoItem from './ToDo/ToDoItem.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "all",
      list: [{
        text: "Buy gifts for babe",
        isComplete: true
      },
      {
        text: "Tell babe I'm sorry",
        isComplete: false
      }]
    }
  }

  onEntrySubmitHandler(text) {
    console.log("submitted entry ", text)
    this.setState(state => {
      state.list.push({
        text: text,
        isComplete: false
      })
      return state;
    })
  }

  onToggleCompletedChangeHandler(showCompleted) {
    console.log("show completed ", showCompleted)
    this.setState(state => {
      state.list.forEach(item => {
        item.isComplete = showCompleted;
      });
      return state;
    })
  }


  render() {
    return (
      <section className="todoapp">
        <EntryComponent onEntrySubmit={this.onEntrySubmitHandler.bind(this)} />
        <section className="main">
          <ToggleComponent onToggleChange={this.onToggleCompletedChangeHandler.bind(this)} />
          <ToDoList list={this.state.list} />
          {/* <ul className="todo-list">
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
            </ul> */}
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
