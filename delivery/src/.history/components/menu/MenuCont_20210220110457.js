import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBall.svg'
import React,{useState,useEffect} from 'react'
import gsap from 'gsap'

export default function MenuCont(props) {
  const [menuShow, setMenuShow] = useState('')
  const [sideShowTl,setSideShowTl] = useState()
  useEffect(() => {
    const showTl = gsap.timeline()
    showTl.to("#sideShow", {
      display: 'block',
      opacity:1,
      clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut"
    });
    showTl.pause()
    setSideShowTl(showTl)
   
  }, [])
    const Menu= () => {
      return <div className='sideItem'>
        <h2>Menu</h2>
      </div>
    }
    const Order=() => {
      return (
        <div className="sideItem">
          <h2>Order</h2>
        </div>
      );
    }
    
    const About= () => {
      return (
        <div className="sideItem">
          <h2>About</h2>
        </div>
      );
    }
  
  const { navClick } = props
  const navItemClick = (i) => {
    const name = i.target.innerText
    const id = i.target.id
    const index = id[-1]
    console.log(name)
    if (menuShow === '') {
      sideShowTl.play()
      setMenuShow(name)
    }
    else if (menuShow !== name) {
       sideShowTl.reverse().then(() => {
         sideShowTl.play();
       });
      setMenuShow(name)
    }

    
  }
  
    return (
      <div id="menu">
        <nav>
          {/* <MenuBtn id='menuBtn' /> */}
          <div id="menuBtnCont" onClick={navClick}></div>
          <div id="navInnerCont">
            <div id='item0' onClick={(i) => navItemClick(i)} className="navItem">
              Menu
            </div>
            <div id='item1' onClick={(i) => navItemClick(i)} className="navItem">
              Order
            </div>
            <div id='item2' onClick={(i) => navItemClick(i)} className="navItem">
              About
            </div>
          </div>
        </nav>
        <div id="sideShow">
          <Menu />
          <Order />
          <About/>
        </div>
      </div>
    );
}
