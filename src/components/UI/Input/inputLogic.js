import React from 'react';

export const defaultInput = (props, style) => {
    return <input 
        className={style.InputElement} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed} />;
}

export const createTextAreaInput = (props, style) => {
    return <textarea 
        className={style.InputElement} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed} />;
}

export const createSelectInput = (props, style) => {
    if (props.elementConfig.options) {
        return (
            <select 
                className={style.InputElement} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        );
    }
}