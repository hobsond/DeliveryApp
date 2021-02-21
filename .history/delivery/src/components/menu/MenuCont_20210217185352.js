import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBttn.svg'
import React from 'react'

export default function MenuCont() {
    return (
      <div id="menu">
        <nav>
          <MenuBtn />
        </nav>
      </div>
    );
}
