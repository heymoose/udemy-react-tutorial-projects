import React from 'react';
import SwitchMap from '../../../jsUtils/switchMap';
import * as logic from './inputLogic';
import style from './Input.css';

const input = (props) => {
    const inputElementSwitch = new SwitchMap([
        ['input', logic.defaultInput(props, style)],
        ['textarea', logic.createTextAreaInput(props, style)],
        ['select', logic.createSelectInput(props, style)],
    ], logic.defaultInput(props, style));

    const inputElement = inputElementSwitch.switch(props.elementType);

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;