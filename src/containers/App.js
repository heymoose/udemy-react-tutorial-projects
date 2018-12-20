import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
  }

  // Discouraged hook - often used incorrectly
  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons
  //     || nextState.showPersons !== this.state.showPersons;
  // }

  // Discouraged hook - often used incorrectly
  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  // Triggered whenever props are updated, allows you to update state along with them
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] inside getDerivedStateFromProps()', nextProps, prevState);

    // Need to return state here, gives you the chance to return something updated, otherwise return prevState
    return prevState;
  }

  // Snapshot of dom before update
  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: '0', name: 'Marc', age: 30 },
      { id: '1', name: 'Karrah', age: 29 },
      { id: '2', name: 'Allie', age: 28 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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

    // If you need to change state in a way that relies on the previous state, this is the best practice way of doing it
    // Essentially, setState is called async, so you can't depend on this.state always having the value you are expecting
    // To fix it we are instead passing a function into setState which accepts the prevState as an arg, and then returns
    // an object which changes the state based on that passed in arg.  This is an async safe way of doing it
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    }

    return (
      <>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App);
