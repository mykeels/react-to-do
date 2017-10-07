import React, { Component } from 'react'
import EntryComponent from './EntryComponent/EntryComponent.js'
import ToggleComponent from './ToggleCompleted/ToggleCompleted.js'
//import ToDoList from './ToDo/ToDoList.js'
import ToDoItem from './ToDo/ToDoItem.js'
import FooterComponent from './FooterComponent/FooterComponent.js'

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
        isComplete: true
      },
      {
        text: "Cook babe's dinner",
        isComplete: false
      },
      {
        text: "Make babe Happy",
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

  onFooterModifyStateHandler(newState) {
    console.log(newState)
    this.setState(state => newState)
  }

  onToDoItemCompleteChangeHandler(index, isComplete) {
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
      <section className="todoapp">
        <EntryComponent onEntrySubmit={this.onEntrySubmitHandler.bind(this)} />
        <section className="main">
          <ToggleComponent onToggleChange={this.onToggleCompletedChangeHandler.bind(this)} />
          <ul className="todo-list">
              {this.state.list.map((item, index) => <ToDoItem data={item} index={index} onCompleteChange={this.onToDoItemCompleteChangeHandler.bind(this, index)} />)}
          </ul>
          {/* <ToDoList list={this.state.list} /> */}
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
        <FooterComponent state={this.state} onModifyState={this.onFooterModifyStateHandler.bind(this)} />
      </section>
    );
  }
}

export default App;
