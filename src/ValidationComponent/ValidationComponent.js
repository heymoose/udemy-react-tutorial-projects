import React from 'react';

const validationComponent = (props) => {
    const output = props.inputLength > 5 ? 'Text too long' : 'Text too short';

    return (
        <p>Validation: {output}</p>
    );
}

export default validationComponent;