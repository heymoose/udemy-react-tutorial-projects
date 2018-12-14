import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Marc', age: 30 },
      { id: '1', name: 'Karrah', age: 29 },
      { id: '2', name: 'Allie', age: 28 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
                          return p.id === id;
                        }),
          personsCopy = [...this.state.persons],
          person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    personsCopy[personIndex] = person;

    this.setState({ persons: personsCopy });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // same as below, only below is the more modern method, using ES6 technique
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}  // Use the arrow function syntax in order to pass in index
                changed={(event) => this.nameChangeHandler(event, person.id)}
                name={person.name} 
                age={person.age} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello there, this is the react app</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );

    // This is the equivalent of the above code.  After the above is compiled, it is turned into the following line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
