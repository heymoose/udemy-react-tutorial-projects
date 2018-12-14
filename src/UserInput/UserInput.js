import React from 'react';

const UserInput = (props) => {
    return (
        <input type='text' onChange={props.updateName} defaultValue={props.name}></input>
    );
};

export default UserInput;