import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        //{key: 1, text:'Learn JSX', isComplete:true},
        //{key: 2, text:'Learn React', isComplete:false},
        //{key: 3, text:'Learn BS', isComplete:false}
      ],
      date: new Date() 
    }
  }

  /*
  getInitialState(){
    return {
      items: []
    }
  }
  */

  addItem = (event) => {
    this.state.items.push(
      {
        key: Date.now(),
        text: this._inputElement.value,
        isComplete:false
      }
    );

    console.log(this.state.items); 
    // reset the box to nothing after
    this._inputElement.value = "";

    event.preventDefault(); 

  }

  render() {
    /*
    var todoEntries = this.props.entries; 
    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    };
    var listItems = todoEntries.map(createTasks);
    */
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <b>Welcome to Amid's Github</b>
          </h2>
          <h3>It is {this.state.date.toLocaleTimeString()} PDT</h3>
        </div>
        <div className ="Todo-App">
          <form onSubmit= {this.addItem}>
            <input placeholder = "Enter Task" ref = { (a) => 
                this._inputElement = a}>
            </input> 
            <button type = "submit">Add</button> 
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.items.map( item => 
              <li key = {item.key}>
                <input type="checkbox" defaultChecked={item.isComplete}/> 
                {item.text}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
