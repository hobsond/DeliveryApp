import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBttn.svg'
import React from 'react'

export default function MenuCont(props) {
    const {navClick} = props
    return (
      <div id="menu">
        <nav>
          {/* <div id='menBtn'>
            
            </div>  */}
          <MenuBtn id='menuBtn'/>
            
        </nav>
      </div>
    );
}
