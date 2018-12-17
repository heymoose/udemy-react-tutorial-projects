import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello there, this is the react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
