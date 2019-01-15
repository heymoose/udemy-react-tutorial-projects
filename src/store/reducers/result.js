import * as actions from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actions.DELETE_RESULT:
            // This would be one way of immutable removing an element from an array
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            // This is the preferred, shorter way of immutably removing an element from an array
            const updatedArray = state.results.filter(el => el.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArray
            }
        default: return state;
    }
};

export default reducer;