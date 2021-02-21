import './App.css';
import {useState,useEffect,createContext} from 'react'
import Home from './components/home/HomeCont'
import Menu from './components/menu/MenuCont'
import gsap from 'gsap'



function App() {
  const [homeTl,setHomeTl] = useState()
  useEffect(() => {
    const homeBtnTl = gsap.timeline()
    homeBtnTl
    .to("#home",{opacity:0,display:'none',ease:'Power1.inOut',duration:.6})
    .fromTo('#menu',{translateX:100,opacity:0},{translateX:0,opacity:1})
    homeBtnTl.pause()
    setHomeTl(homeBtnTl)


  }, [])
  
  const homeBtnClick = ()=>homeTl.play()
  return (
      <div className="App">
        <div id="bgFilter">
        <Home btnClick={homeBtnClick} />
        <Menu/>
        </div>
      </div>
  );
}

export default App;
