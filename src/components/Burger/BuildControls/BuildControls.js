import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import style from './BuildControls.css'

const controls = [
    { label: 'Salad', ingredientType: 'salad' },
    { label: 'Bacon', ingredientType: 'bacon' },
    { label: 'Cheese', ingredientType: 'cheese' },
    { label: 'Meat', ingredientType: 'meat' }
];

const buildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.ingredientType)}
                removed={() => props.ingredientRemoved(ctrl.ingredientType)}
                disabled={props.disabled[ctrl.ingredientType]} />
        ))}
    </div>
);

export default buildControls;