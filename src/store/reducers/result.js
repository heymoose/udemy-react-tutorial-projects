import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    // This would be one way of immutable removing an element from an array
    // const id = 2;
    // const newArray = [...state.results];
    // newArray.splice(id, 1);

    // This is the preferred, shorter way of immutably removing an element from an array
    const updatedArray = state.results.filter(el => el.id === action.resultElementId);
    updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});

        case actionsTypes.DELETE_RESULT:
            return deleteResult(state, action);

        default: return state;
    }
};

export default reducer;