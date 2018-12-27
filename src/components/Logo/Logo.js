import React from 'react';
import style from './Logo.css';

// Can import images so webpack knows to keep track of it when everything is
// compiled and bundled together, since folder structure is going to be different in prod
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={style.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt='MyBurger' />
    </div>
);

export default logo;