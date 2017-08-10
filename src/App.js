import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './component/clock'
import './App.css';

//let clk = new Date().toLocaleTimeString(); 

class App extends Component {
  /* Constructor passes on the props. It always starts with a super()
  ** function. We decided to instantiate the state by defining an 
  ** array called items. 
  */
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  /* Function addItem is defined to push new items into to the todo
  ** array or lsit. We use the Date.now() as a key because later
  ** we need to assign keys to list items in JSX. isComplete is 
  ** a tag that lets us know whether the task is compeleted or not
  ** it will be determined by a check mark
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

  /* In render() method we categorize each section of the app with
  ** HTML headers. className is specific to HTML so it doesn't get
  ** confused with JSX. More comments below...
  */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <b>Welcome to Amid's Github</b>
          </h2>
          {/* Clock component is defined in component/clock.js */}
          <Clock ></Clock>
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
