import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons} 
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
