import React from 'react'
import './home.css'
export default function HomeCont(props) {
    const {btnClick} = props
    return (
        <div id='home'>
            <h1>Naturally Inspired Pizza</h1>
            <button id='homeButton'>Order Now</button>
        </div>
    )
}
