import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBttn.svg'
import React from 'react'

export default function MenuCont(props) {
    const {navClick} = props
    return (
      <div id="menu">
        <nav>
                <MenuBtn onClick={navClick} />
                <div id='navBox'></div>
        </nav>
      </div>
    );
}
