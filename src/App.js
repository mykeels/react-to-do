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
      newEntry: "",
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
      }],
      length: 4
    }
  }
  
  onEntrySubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted entry ", this.state.newEntry)
    this.setState(state => ({ 
        newEntry: "",
        length: state.length + 1,
        list: [...state.list, {
          key: state.length + 1,
          text: state.newEntry,
          isComplete: false
        }]
     }))
  }
  
  onEntryComponentTextChangeHandler = (e) => {
    const text = e.target.value;
    this.setState({ newEntry: text });
  }

  onToggleCompletedChangeHandler(e) {
    e.persist();
    const showCompleted = e.target.checked;
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
            if (i === index) {
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

  onToDoItemDestroyHandler(key) {
    this.setState(state => {
      const keyIndex = state.list.findIndex(item => item.key === key);
      state.list.splice(keyIndex, 1);
      return state;
    })
  }

  onToDoEditHandler(key, text) {
    this.setState(state => {
      const keyIndex = state.list.findIndex(item => item.key === key);
      state.list[keyIndex].text = text;
      delete state.list[keyIndex].editText;
      return state;
    })
  }

  onFooterSelectTabHandler = (e) => {
    this.setState({ activeTab: e.target.getAttribute("data-value") })
  }

  onClearCompletedItemsHandler = () => {
    this.setState(state => ({ ...state, ...{ list: state.list.filter(item => !item.isComplete) } }))
  }

  filterListItemIsComplete = (item) => !!item.isComplete;
  filterListItemIsNotComplete = (item) => !item.isComplete;

  render() {
    return (
      <section className="todoapp">
        <EntryComponent text={this.state.newEntry} onTextChange={this.onEntryComponentTextChangeHandler} onEntrySubmit={this.onEntrySubmitHandler} />
        <section className="main">
          <ToggleComponent value={this.state.list.every(this.filterListItemIsComplete)} onToggleChange={this.onToggleCompletedChangeHandler.bind(this)} />
          <ul className="todo-list">
              {this.state.list.filter(this.filterToDoItems.bind(this)).map((item, index) => {
                    return (<ToDoItem data={item} key={item.key} 
                                onCompleteChange={this.onToDoItemCompleteChangeHandler.bind(this, index)} 
                                onDestroy={this.onToDoItemDestroyHandler.bind(this)} 
                                onEdit={this.onToDoEditHandler.bind(this)} />) 
                  })
                  }
          </ul>
        </section>
        <FooterComponent itemsLeftCount={this.state.list.filter(this.filterListItemIsNotComplete).length} 
                      activeTab={this.state.activeTab} onSelectTab={this.onFooterSelectTabHandler}
                      onClearCompletedItems={this.onClearCompletedItemsHandler} />
      </section>
    );
  }
}

export default App;
