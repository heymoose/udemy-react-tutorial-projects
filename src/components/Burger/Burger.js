import React from 'react';
import style from './Burger.css'
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <Ingredient key={igKey + i} ingredientType={igKey} />
                });
        });

    return (
        <div className={style.Burger}>
            <Ingredient ingredientType='bread-top' />
            {transformedIngredients}
            <Ingredient ingredientType='bread-bottom' />
        </div>
    );
};

export default burger;