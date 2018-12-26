import React from 'react';
import Logo from '../../Logo/Logo';
import style from './Toolbar.css';

const toolbar = (props) => (
    <header className={style.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;