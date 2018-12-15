import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputText: ''
  }

  textUpdateHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text"
          onChange={(event) => this.textUpdateHandler(event)}>
        </input>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
