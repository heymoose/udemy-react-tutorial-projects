import React from 'react';
import SwitchMap from '../../../jsUtils/switchMap';
import style from './Input.css';

const input = (props) => {
    const inputElementSwitch = new SwitchMap([
        ['input', <input className={style.InputElement} {...props} />],
        ['textarea', <textarea className={style.InputElement} {...props} />] 
    ], <input className={style.InputElement} {...props} />);

    const inputElement = inputElementSwitch.switch(props.inputtype);

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;