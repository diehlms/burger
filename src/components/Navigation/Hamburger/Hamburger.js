import React from 'react'
import './Hamburger.css'

export default function Hamburger(props) {
    return (
        <div 
            onClick={props.clicked}
            className='Hamburger'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

