import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Marc', age: 30 },
      { name: 'Karrah', age: 29 },
      { name: 'Allie', age: 28 }
    ]
  }

  switchNameHandler = (newName) => {
    // Don't do this
    // this.state.persons[0].name = 'Marcus';

    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Karrah', age: 29 },
        { name: 'Allie', age: 24 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Marc', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'Allie', age: 24 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello there, this is the react app</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={() => this.switchNameHandler('Bloogaboogahhh')}>Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Bloogaboogah22!')}
          changed={this.nameChangeHandler}>Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );

    // This is the equivalent of the above code.  After the above is compiled, it is turned into the following line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
