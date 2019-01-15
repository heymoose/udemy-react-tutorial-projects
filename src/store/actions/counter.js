import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (amt) => {
    return {
        type: actionTypes.ADD,
        value: amt
    }
};

export const subtract = (amt) => {
    return {
        type: actionTypes.SUBTRACT,
        value: amt
    }
};