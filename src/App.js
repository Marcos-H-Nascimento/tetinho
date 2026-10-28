import saturno from './imgaes/saturno.png'
import bg from './imgaes/bluesky.jpg'
import thisisteto from './imgaes/teto.png'

import './App.css'

import CompStuff from "./componente/ComponenteDinamico"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", width: "100%", zIndex: "1" }}
          factor={4} speed={0.5}></ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ zIndex: "2" }}>
          <div className="content">
            <img src={thisisteto} alt="" />
            <div className="textContent">
              <h2>This is</h2>
              <h1>TETO</h1>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer>

        </ParallaxLayer>

        <ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer>
        </ParallaxLayer>
      </Parallax >
    </div >
  )
}

export default App