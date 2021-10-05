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

  //  FUNCTIONS
  // check if being viewed on mobile device and assign to state
  useEffect(() => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
  }, [])

  return (
    <div className="App">
      <nav>
        <h1>Calmly</h1>
        <img src={`${isDarkMode === false ? (darkModeImg) : (lightModeImg)}`} tabIndex="0" alt="toggle dark mode" />
      </nav>
      <main>
        <Picker />
        <Player />
      </main>
    </div>
  );
}

export default App;
