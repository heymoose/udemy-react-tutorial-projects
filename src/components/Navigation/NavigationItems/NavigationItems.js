import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import style from './NavigationItems.css';

const navigationItems = (props) => {
    const ordersNav = props.isAuthenticated
        ? <NavigationItem link="/orders">Orders</NavigationItem>
        : null;
    
    const authNav = !props.isAuthenticated 
        ? <NavigationItem link="/auth">Authenticate</NavigationItem>
        : <NavigationItem link="/logout">Logout</NavigationItem>

    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            {ordersNav}
            {authNav}
        </ul>
    );
}

export default navigationItems;