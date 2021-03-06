import './menu.css'
import {ReactComponent as MenuBtn} from '../../images/mobile/menu/menuBall.svg'
import React,{useState,useEffect} from 'react'
import gsap from 'gsap'

export default function MenuCont(props) {
  const [menuShow, setMenuShow] = useState([])
  const [sideShowTl, setSideShowTl] = useState()
  const [sideItemsTls, setSideItemsTls] = useState()
  const [currSideItem, setCurrSideItem] = useState(-1)
  const [detailTl, setDetailTl] = useState()
  const [selectedDetail,SetSelectedDetail]= useState()
  const menuItems = [
    {
      title: "Margarita Pizza",
      info: "Yummy Roma tomatoes stacked on top of a warm flaky crust",
      price:9
    },
    {
      title: "Shitty Pizza",
      info: "Yummy Roma tomatoes stacked on top of a warm flaky crust",
      price:8
    },
  ];
  useEffect(() => {
    const showTl = gsap.timeline()
    showTl
      .to("#menuBkg", { display: 'block', duration: .1 })
      .to("#sideShow", {
      display: 'block',
      opacity:1,
      clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut"
    },0);
    showTl.pause()
    setSideShowTl(showTl)

    const sideItems = gsap.utils.toArray('.sideItem')
    const tls = {}
    sideItems.map((i, v) => {
      const sideItmTl = gsap.timeline()
      sideItmTl
        .fromTo(i,{translateY:-30}, { display:'block',opacity:1,translateY:0})
      sideItmTl.pause()
      tls[v] = sideItmTl
      
    })
    setSideItemsTls(tls)
    const detTl = gsap.timeline()
    detTl.fromTo("#detailBox",{scale:0}, { display: "block",scale:1 })
      .to("#detailBg", { display: 'block' },0)
    detTl.pause()
    setDetailTl(detTl)
  }, [])
   
  
  const { navClick,menuBtnTl } = props

  const sideItemDisplay = (i) => {
   
    if (currSideItem === -1) {
      sideItemsTls[i].play();
      setCurrSideItem(i)
    }
    else if(currSideItem !== i) {
      sideItemsTls[currSideItem].reverse()
        .then(() => {
          sideItemsTls[i].play();
          setCurrSideItem(i);
        
      })
    }
    
  }
  const navItemClick = (i) => {
    const name = i.target.innerText
    const id = i.target.id
    const index = Number(id[4])
    if (menuShow === []) {
      setMenuShow([name, index])
    }
    else if (menuShow[0] !== name) {
      sideShowTl.reverse()
        .then(() => {
          sideShowTl.play()
      setMenuShow([name, index]);

      })
    }
    sideItemDisplay(index)
  }
  const closeAll = () => {
    sideShowTl.reverse()
    navClick();
    setMenuShow([])

    sideItemsTls[currSideItem].reverse().then(() => {
      setCurrSideItem(-1);
      
    })
   };
  const viewDetail = (index) => {
    SetSelectedDetail(menuItems[index])
    detailTl.play();
   }

    
  
  
    return (
      <div id="menu">
        <nav>
          <div id="menuBtnCont" onClick={navClick}></div>
          <div id="navInnerCont">
            <div
              id="item0"
              onClick={(i) => navItemClick(i)}
              className="navItem"
            >
              Menu
            </div>
            <div
              id="item1"
              onClick={(i) => navItemClick(i)}
              className="navItem"
            >
              Order
            </div>
            <div
              id="item2"
              onClick={(i) => navItemClick(i)}
              className="navItem"
            >
              About
            </div>
          </div>
        </nav>
        <div id="menuBkg" onClick={closeAll}></div>
        <div id="sideShow">
          <div className="sideItem">
            <h2>Menu</h2>
          </div>
          <div className="sideItem">
            <h2>Order</h2>
          </div>
          <div className="sideItem">
            <h2>About</h2>
          </div>
        </div>
        <div onClick={()=>detailTl.reverse()} id='detailBg'></div>
        <div id='detailBox'>
          <h2>{ selectedDetail.title}</h2>
        </div>
        <div id="menuInnerCont">
          {
            menuItems.map((i,v) => {
              return (
                <div className="menuChoice">
                  <h3 className="choiceTitle">{ i.title}</h3>
                  <div className="choiceBtnCont">
                    <button className="choiceBtn addBtn">Add To Order </button>
                    <button onClick={()=>viewDetail(v)} className="choiceBtn viewBtn">View Details </button>
                  </div>
                  <div className="choiceInfo">
                    <p>
                    {i.info}
                    </p>
                  </div>
                  <div class='priceCont'><h4>{ i.price}</h4></div>
                </div>
              );
            })
          }
          
          
        </div>
      </div>
    );
}
