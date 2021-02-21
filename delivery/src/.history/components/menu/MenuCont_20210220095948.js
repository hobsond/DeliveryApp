import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBall.svg'
import React from 'react'

export default function MenuCont(props) {
    const {navClick} = props
    return (
      <div id="menu">
        <nav>
          {/* <MenuBtn id='menuBtn' /> */}
          <div id='menuBtnCont' onClick={navClick}>

          </div>
          <div id='navInnerCont'>
            <div className='navItem'>Menu</div>
            <div className='navItem'>My Oder</div>
            <div className='navItem'>About</div>
          </div>
            
        </nav>
      </div>
    );
}
