import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [style.SideDrawer, style.Close];

    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open];
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;