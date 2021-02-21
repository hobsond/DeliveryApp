import './App.css';
import {useState,useEffect,createContext} from 'react'
import Home from './components/home/HomeCont'
import gsap from 'gsap'



function App() {
  const [homeTl,setHomeTl] = useState()
  useEffect(() => {
    const homeBtnTl = gsap.timeline()
    homeBtnTl
    .to("#home",{opacity:0,display:'none',ease:'Power1.inOut',duration:.6})
    homeBtnTl.pause()
    setHomeTl(homeBtnTl)


  },[])
  return (
      <div className="App">
        <div id="bgFilter">
          <Home />
        </div>
      </div>
  );
}

export default App;
