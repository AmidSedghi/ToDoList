import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <b>Welcome to Amid's Github</b>
            </h2>
        </div>
        <div className ="Todo-App">
          <form> 
            <input type = "text"/> 
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map( todo => 
              <li key = {todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string
}

export default App;
