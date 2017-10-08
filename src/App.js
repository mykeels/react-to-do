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
        key: 0,
        text: "Buy gifts for babe",
        isComplete: true
      },
      {
        key: 1,
        text: "Tell babe I'm sorry",
        isComplete: true
      },
      {
        key: 2,
        text: "Cook babe's dinner",
        isComplete: false
      },
      {
        key: 3,
        text: "Make babe Happy",
        isComplete: false
      }]
    }
  }

  onEntrySubmitHandler(text) {
    console.log("submitted entry ", text)
    this.setState(state => {
      state.list.push({
        key: state.list.length,
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

  filterToDoItems(item) {
    if (this.state.activeTab === "active") return !item.isComplete;
    else if (this.state.activeTab === "completed") return !!item.isComplete;
    else return true;
  }

  render() {
    return (
      <section className="todoapp">
        <EntryComponent onEntrySubmit={this.onEntrySubmitHandler.bind(this)} />
        <section className="main">
          <ToggleComponent onToggleChange={this.onToggleCompletedChangeHandler.bind(this)} />
          <ul className="todo-list">
              {this.state.list.filter(this.filterToDoItems.bind(this)).map((item, index) => {
                    return (<ToDoItem data={item} key={item.key} onCompleteChange={this.onToDoItemCompleteChangeHandler.bind(this, index)} />) 
                  })
                  }
          </ul>
        </section>
        <FooterComponent state={this.state} onModifyState={this.onFooterModifyStateHandler.bind(this)} filterToDoItems={this.filterToDoItems} />
      </section>
    );
  }
}

export default App;
