import './App.css';
import {useState,useEffect,createContext} from 'react'
import Home from './components/home/HomeCont'
import Menu from './components/menu/MenuCont'
import gsap from 'gsap'



function App() {
  const [homeTl,setHomeTl] = useState()
  const [menuBtnTl, setMenuBtnTl] = useState()
  const [navShow,setNavShow]= useState(false)
  useEffect(() => {
    const homeBtnTl = gsap.timeline()
    homeBtnTl
    .to("#home",{opacity:0,display:'none',ease:'Power1.inOut',duration:.6})
    .fromTo('#menu',{translateX:200,opacity:0},{translateX:0,opacity:1,duration:.6},'-=.3')
    homeBtnTl.pause()
    setHomeTl(homeBtnTl)

    const menBtnTl = gsap.timeline()
    menBtnTl.to("#navInnerCont", {
      clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.6,
    });
    menBtnTl.pause()
    setMenuBtnTl(menBtnTl)


  }, [])
  
  const homeBtnClick = () => homeTl.play()
  const menuBtnClick = () => {
    !navShow ? menuBtnTl.play() : menuBtnTl.reverse()
    setNavShow(!navShow)
      
  }
 
  return (
      <div className="App">
        <div id="bgFilter">
        <Home btnClick={homeBtnClick} />
        <Menu navClick={menuBtnClick} menuBtnTl={ menuBtnTl}/>
        </div>
      </div>
  );
}

export default App;
