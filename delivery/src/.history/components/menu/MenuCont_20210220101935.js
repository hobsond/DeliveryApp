import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBall.svg'
import React,{useState,useEffect} from 'react'
import gsap from 'gsap'

export default function MenuCont(props) {
  const [menuShow, setMenuShow] = useState(false)
  const [sideShowTl,setSideShowTl] = useState()
  useEffect(() => {
    const showTl = gsap.timeline()
    showTl.to("#sideShow", {
      display: 'block',
      opacity:0,
      clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut"
    });
    showTl.pause()
    setSideShowTl(showTl)

    const navItems = gsap.utils.toArray('.navItem')
    navItems.map((i, v) => {
      i.onClick = () => {
        console.log('clicked')
        if (menuShow) {
          sideShowTl.reverse().then(() => {
            sideShowTl.play()
          })
        }
        else {
          sideShowTl.play()
        }
      }
    })

  }, [])
  
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
        <div id='sideShow'>
          
        </div>
      </div>
    );
}
