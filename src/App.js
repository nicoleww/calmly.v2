import "./styles/style.css"
import { useState } from "react"
// import components
import Picker from "./components/Picker"
import Player from "./components/Player"
// imports from assets:
// 1. images
import lightModeImg from "./assets/images/light.png"
import darkModeImg from "./assets/images/dark.png"


const App = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className="App">
      <nav>
        <h1>Calmly</h1>
        <p tabIndex="0">dark/light here</p>
      </nav>
      <main>
        <Picker />
        <Player />
      </main>
    </div>
  );
}

export default App;
