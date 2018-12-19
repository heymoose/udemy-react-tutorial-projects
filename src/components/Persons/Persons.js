import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillRecieveProps()', nextProps);
    }

    // Don't need this now because this is inheriting PureComponent, which makes these shallow change comparisons automagically
    // ---------------------------
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate()');
    }

    render () {
        console.log('[Persons.js] inside render');

        return this.props.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.props.clicked(index)}  // Use the arrow function syntax in order to pass in index
              changed={(event) => this.props.changed(event, person.id)}
              name={person.name} 
              age={person.age} 
              position={index} />
          });
    }
}

export default Persons;