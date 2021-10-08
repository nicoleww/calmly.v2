import "./styles/style.css"
import { useState, useEffect } from "react"
// COMPONENTS
import Picker from "./components/Picker"
import Player from "./components/Player"
// ASSETS:
// image
import lightModeImg from "./assets/images/light.png"
import darkModeImg from "./assets/images/dark.png"
import birdImg from "./assets/images/birds.jpg"
import fireImg from "./assets/images/fire.jpg"
import waterImg from "./assets/images/water.jpg"
import waveImg from "./assets/images/waves.jpg"
import windImg from "./assets/images/wind.jpg"
// sound
import birdSound from "./assets/sounds/birds.wav"
import fireSound from "./assets/sounds/fire.wav"
import waterSound from "./assets/sounds/water.wav"
import waveSound from "./assets/sounds/waves.wav"
import windSound from "./assets/sounds/wind.mp3"
// video
import birdVid from "./assets/videos/birds.mp4"
import fireVid from "./assets/videos/fire.mp4"
import waterVid from "./assets/videos/water.mp4"
import waveVid from "./assets/videos/waves.mp4"
import windVid from "./assets/videos/wind.mp4"

const App = () => {

  // STATE
  const [isMobile, setIsMobile] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selected, setSelected] = useState([])
  const [sounds, setSounds] = useState([
    {name: "birds", title: "Birds Chirping", sound: new Audio(birdSound), image: birdImg, caption: "A small bird sitting on a tree branch.", video: birdVid, isPlaying: false},
    {name: "water", title: "Babbling Stream", sound: new Audio(waterSound), image: waterImg, caption: "A stream in a wooded area.", video: waterVid, isPlaying: false},
    {name: "fire", title: "Crackling Fire", sound: new Audio(fireSound), image: fireImg, caption: "A close up of a fireplace.", video: fireVid, isPlaying: false},
    {name: "waves", title: "Waves Crashing", sound: new Audio(waveSound), image: waveImg, caption: "Waves crashing on a beach.", video: waveVid, isPlaying: false},
    {name: "wind", title: "Rushing Wind", sound: new Audio(windSound), image: windImg, caption: "Plants bending in the wind.", video: windVid, isPlaying: false}
  ])

  // FUNCTIONS
  // check if being viewed on mobile device 
  useEffect(() => {
      if (window.innerWidth < 1030) {
        setIsMobile(true)
      } else {
        console.log("problem here")
        setIsMobile(false)
      }
  }, [])

  // toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode === false) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }

  // toggle dark mode for tabs
  const toggleDarkModeTab = (e) => {
    if (e.code === "Enter") {
      if (isDarkMode === false) {
        setIsDarkMode(true)
      } else {
        setIsDarkMode(false)
      }
    } else {
      return
    }
  }


  return (
    <div className={`${isDarkMode === false ? "App" : "App dark"}`}>
      <nav>
        <h1>Calmly</h1>
        <img onClick={toggleDarkMode} onKeyPress={toggleDarkModeTab} src={`${isDarkMode === false ? (darkModeImg) : (lightModeImg)}`} tabIndex="0" alt="toggle dark and light mode" />
      </nav>
      <main>
        <Picker sounds={sounds} selected={selected} setSelected={setSelected} setSounds={setSounds} />
        <Player sounds={sounds} selected={selected} isMobile={isMobile} />
      </main>
    </div>
  );
}

export default App;
