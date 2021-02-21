import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBall.svg'
import React,{useState,useEffect} from 'react'
import gsap from 'gsap'

export default function MenuCont(props) {
  const [menuShow, setMenuShow] = useState([])
  const [sideShowTl, setSideShowTl] = useState()
  const [sideItemsTls, setSideItemsTls] = useState()
  const [currSideItem,setCurrSideItem] = useState()
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

    const sideItems = gsap.utils.toArray('.sideItem')
    const tls = {}
    sideItems.map((i, v) => {
      const sideItmTl = gsap.timeline()
      sideItmTl
        .to(i, { display:'none'})
      sideItmTl.pause()
      tls[v] = sideItmTl
      
    })
    setSideItemsTls(tls)
   
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
  const sideItemDisplay = (i) => {
    // if (!currSideItem) {
    //   sideItemsTls[i].play()
    //   setCurrSideItem(i)
    // }
    // else {
    //   sideItemsTls(currSideItem).reverse()
    //   sideItemsTls(i).play()
    //   setCurrSideItem(i)
    // }
    sideItemsTls[i].play()
    console.log('tried')
    
  }
  const navItemClick = (i) => {
    const name = i.target.innerText
    const id = i.target.id
    const index = Number(id[4])
    if (menuShow === []) {
      sideShowTl.play()
      setMenuShow([name, index])
          sideItemDisplay(0);

    }
    else if (menuShow[0] !== name) {
      sideShowTl.reverse()
        .then(() => {
          sideShowTl.play()
          sideItemDisplay(0)
      setMenuShow([name, index]);

      })
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
