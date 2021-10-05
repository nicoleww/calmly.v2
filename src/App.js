import "./styles/style.css"
import { useState, useEffect } from "react"
// COMPONENTS
import Picker from "./components/Picker"
import Player from "./components/Player"
// ASSETS:
// images
import lightModeImg from "./assets/images/light.png"
import darkModeImg from "./assets/images/dark.png"


const App = () => {

  // STATE
  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // FUNCTIONS
  // check if being viewed on mobile device 
  useEffect(() => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
      } else {
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
        <img onClick={toggleDarkMode} onKeyPress={toggleDarkModeTab} src={`${isDarkMode === false ? (darkModeImg) : (lightModeImg)}`} tabIndex="0" alt="toggle dark mode" />
      </nav>
      <main>
        <Picker />
        <Player />
      </main>
    </div>
  );
}

export default App;
