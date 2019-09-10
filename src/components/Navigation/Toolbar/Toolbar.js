import React from 'react';
// import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Hamburger from '../Hamburger/Hamburger'
import './Toolbar.css'

const toolbar = (props) => (
    <header className='Toolbar'>
        <Hamburger 
            clicked={props.drawerToggleClicked}
        />
        {/* <Logo /> */}
        <nav className='DesktopOnly'>
            <NavigationItems 
            isAuthenticated={props.isAuth}
            />
        </nav>
    </header>
)

export default toolbar;