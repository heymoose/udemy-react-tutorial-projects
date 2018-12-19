import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        // this.focus();
    }

    focus() {
        // Use the reference to the input element we created in the jsx below to focus on a certain name input
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] inside render');

        return <>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                ref={this.inputElement}  // Create a reference to this element so it can be access elsewhere
                type="text" 
                onChange={this.props.changed} 
                defaultValue={this.props.name} />
        </>
    }
}

// Ensure your props are of a certain type, will throw an error if they are not
// Does not work in functional components
Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);