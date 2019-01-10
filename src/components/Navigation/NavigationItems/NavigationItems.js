import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import style from './NavigationItems.css';

const navigationItems = () => (
    <ul className={style.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;