import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
    }

    render () {
        console.log('[Person.js] inside render');

        return <>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} defaultValue={this.props.name}></input>
        </>
    }
}

export default withClass(Person, classes.Person);