import React from 'react';
import SwitchMap from '../../../jsUtils/switchMap';
import * as logic from './inputLogic';
import style from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [style.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(style.Invalid);
    }

    const inputElementSwitch = new SwitchMap([
        ['input', logic.defaultInput(props, inputClasses.join(' '))],
        ['textarea', logic.createTextAreaInput(props, inputClasses.join(' '))],
        ['select', logic.createSelectInput(props, inputClasses.join(' '))],
    ], logic.defaultInput(props, inputClasses.join(' ')));

    inputElement = inputElementSwitch.switch(props.elementType);

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;