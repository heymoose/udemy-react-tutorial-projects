import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Ingredient.css';

class Ingredient extends Component {
    render() {
        let ingredient = null;
        const typeToStyleMap = new Map([
            ['bread-bottom', <div className={style.BreadBottom}></div>],
            ['bread-top', (
                <div className={style.BreadTop}>
                    <div className={style.Seeds1}></div>
                    <div className={style.Seeds2}></div>
                </div>
            )],
            ['meat', <div className={style.Meat}></div>],
            ['cheese', <div className={style.Cheese}></div>],
            ['salad', <div className={style.Salad}></div>],
            ['bacon', <div className={style.Bacon}></div>]
        ]);
    
        ingredient = typeToStyleMap.has(this.props.ingredientType) 
            ? typeToStyleMap.get(this.props.ingredientType) 
            : null;
    
        return ingredient;
    }
}

Ingredient.propTypes ={
    ingredientType: PropTypes.string.isRequired
};

export default Ingredient;