import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}  // Use the arrow function syntax in order to pass in index
                changed={(event) => this.nameChangeHandler(event, person.id)}
                name={person.name} 
                age={person.age} />
            })
          }
        </div>
      );

      btnClass = classes.red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello there, this is the react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
