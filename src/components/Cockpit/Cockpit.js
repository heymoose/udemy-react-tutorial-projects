import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = style.red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(style.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(style.bold);
    }

    return (
        <div className={style.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;