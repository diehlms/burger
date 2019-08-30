import React from 'react'
// import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Ax from '../../../hoc/Ax/Ax'
import './SideDrawer.css'

export default function SideDrawer(props) {
    let attachedClasses = ['SideDrawer', 'Close'];

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <Ax>
            <Backdrop 
                show={props.open} 
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')}>
                {/* <Logo /> */}
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Ax>
    )
}
