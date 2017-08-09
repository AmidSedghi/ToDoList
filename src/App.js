import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;
 
    function createTasks(item) {
      return <li key={item.id}>{item.name}</li>
    }
 
    var listItems = todoEntries.map(createTasks);
 
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, name:'Learn JSX', isComplete:true},
        {id: 2, name:'Learn React', isComplete:false},
        {id: 3, name:'Learn BS', isComplete:false}
      ]
    }
  }

  addItem(e){
    var itemArray = this.state.todos; 

    this.state.todos.push(
      {
        id: Date.now(), 
        name: this._inputElement.value, 
        isComplete: false
      } 
    );

    /* this.setState({
      todos: itemArray
    }); */

    this._inputElement.value = "";

    /* Add button will trigger our browser's default POST behavior 
      - which we definitely don't want.
    */
    e.preventDefault(); 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <b>Welcome to Amid's Github</b>
          </h2>
          <h3>It is {new Date().toLocaleTimeString()} PDT</h3>
        </div>
        <div className ="Todo-App">
          <form onSubmit={this.addItem}> 
            <input ref={(a) => this._inputElement = a}
              type = "text" placeholder="Enter Task">
            </input> 
            <button type = "submit">Add</button> 
          </form>
          <TodoItems entries={this.state.todos}/>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map( todo => 
              <li key = {todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/> 
                {todo.name}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
