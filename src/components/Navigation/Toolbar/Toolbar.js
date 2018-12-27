import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import style from './Toolbar.css';

const toolbar = (props) => (
    <header className={style.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={style.Logo}>
            <Logo />
        </div>
        <nav className={style.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;