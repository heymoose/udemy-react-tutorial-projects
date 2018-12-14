import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    people: [
      { name: 'Marcus' },
      { name: 'KareBear' },
      { name: 'Al' },
    ]
  };

  nameUpdateHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value },
        { name: "KareBear" },
        { name: "Al" },
      ]  
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1 app</h1>
        <UserInput updateName={this.nameUpdateHandler} name={this.state.people[0].name}></UserInput>
        <UserOutput name={this.state.people[0].name} />
        <UserOutput name={this.state.people[1].name} />
        <UserOutput name={this.state.people[2].name} />
      </div>
    );
  }
}

export default App;
