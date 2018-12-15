import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <h2 className="charBox" onClick={props.click}>{props.character}</h2>
    );
}

export default CharComponent;