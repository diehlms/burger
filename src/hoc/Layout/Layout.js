import React, { Component } from 'react'
import Ax from '../Ax/Ax';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'


export class Layout extends Component {
    render() {
        return (
            <Ax>
                <Toolbar />
                <main className="Content">
                    {this.props.children}
                </main>
            </Ax>
        )
    }
}

export default Layout
