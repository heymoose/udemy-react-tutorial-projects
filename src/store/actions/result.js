import * as actionTypes from './actionTypes';

export const storeResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResultAsync = (result) => {
    // dispatch is in context because of thunk, the middleware that was added to handle async code in redux actions
    return dispatch => {
        setTimeout(() => {
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