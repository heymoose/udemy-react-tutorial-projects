import * as actionTypes from './actionTypes';

export const storeResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResultAsync = (result) => {
    // dispatch is in context because of thunk, the middleware that was added to handle async code in redux actions
    // getState is also a function passed in by thunk that contains the current state
    // Recommended by instructor to use getState as little as possible.  Should instead pass any data needed as an arguement
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(storeResult(result));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
};