import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>The name's {props.name}</p>
            <p>{props.name} is pretty goddamn cool</p>
        </div>
    );
};

export default UserOutput;