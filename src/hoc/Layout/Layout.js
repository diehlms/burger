import React, { Component } from 'react'
import Ax from '../Ax/Ax';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


export class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Ax>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerHandler} 
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Ax>
        )
    }
}

export default Layout
