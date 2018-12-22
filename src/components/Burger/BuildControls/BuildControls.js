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
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;