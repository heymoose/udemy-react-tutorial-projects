import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions'

const addAmount = 5;
const subtractAmount = 5;

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={`Add ${addAmount}`} clicked={this.props.onAddCounter}  />
                <CounterControl label={`Subtract ${subtractAmount}`} clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actions.DECREMENT}),
        onAddCounter: () => dispatch({type: actions.ADD, value: addAmount}),
        onSubtractCounter: () => dispatch({type: actions.SUBTRACT, value: subtractAmount}),
        onStoreResult: (result) => dispatch({type: actions.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actions.DELETE_RESULT, resultElementId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);