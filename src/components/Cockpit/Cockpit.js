import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = style.Button;

    if (props.showPersons) {
        btnClass = [style.red, style.Button].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(style.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(style.bold);
    }

    // Aux is a higher order component that is useful for returning the children elements without a wrapping div or using an array
    // Using the empty tags <> and </> called fragments, does the same thing, and is a new React 16.2 feature that automatically does what Aux does
    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </>
    );
}

export default cockpit;