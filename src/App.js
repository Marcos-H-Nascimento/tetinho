// import saturno from './imgaes/saturno.png'
import bg from './imgaes/bluesky.jpg'
import thisisteto from './imgaes/teto.png'
import tetinho1 from './imgaes/tetofoto3.jpg'
import tetinho2 from './imgaes/tetofoto2.jpg'
import saturno from './imgaes/saturno.png'
import m4 from './imgaes/m4.png'
import previas from './imgaes/previaszip.png'
import groupies from './imgaes/groupies.png'
import vampiro from './imgaes/vampiro.png'
import fdsnorio from './imgaes/fdsnorio.png'
import flowespacial from './imgaes/flowespacial.png'
import mqot from './imgaes/maiorqueotempo.png'
import maisumvoo from './imgaes/maisumvoo.png'
import matecaxteto from './imgaes/matecaxteto.png'
import mveuf from './imgaes/minhavidaeumfilme.png'
import mustangpreto from './imgaes/mustangpreto.png'
import pdum from './imgaes/problemasdeummilionario.png'
import tempozip from './imgaes/tempozip.png'
import zumzumzum from './imgaes/zumzumzum.png'
import maiorqueotempo from './imgaes/maiorqueotempo.png'

import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CompStuff from './componente/ComponenteDinamico'


function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: "1", filter: "brightness(110%)" }}
          factor={8} speed={0.75}></ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ zIndex: "2" }}>
          <div className="content">
            <img src={thisisteto} alt="" />
            <div className="textContent">
              <h2>This is</h2>
              <h1>TETO</h1>
            </div>
          </div>
        </ParallaxLayer >

        <ParallaxLayer style={{ zIndex: "2" }} speed={1} offset={0.85}>
          <section className="divisor">
            <h1>Quem é <span>TETO</span>?</h1>
          </section>

          <div className='pageContent'>
            <section className="infoSection">
              <img src={tetinho1} alt="" className="tiltCard" />
              <p className="infoText">Clériton Sávio Santos Silva (Jacobina, 19 de outubro de 2001), mais conhecido como Teto, é um rapper, cantor e compositor brasileiro. Ficou conhecido por meio das prévias de suas músicas que foram lançadas não oficialmente em vários canais do YouTube, alcançando milhões de visualizações e ganhando fama em redes sociais como o TikTok e Instagram.[1][2]</p>
            </section>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: "2" }} speed={1} offset={1.5}>
          <section className="divisor">
            <h1><span>CARREIRA</span></h1>
          </section>

          <div className='pageContent'>
            <section className="infoSection">
              <img src={tetinho2} alt="" className="tiltCard" />
              <p className="infoText">Teto iniciou sua carreira musical em 2018, mas só começou a ganhar reconhecimento em 2020, após participar de músicas de outros artistas e divulgar suas prévias no Instagram, que viralizaram no YouTube. Após se frustrar com a falta de valorização na Hash Produções, chamou a atenção de Matuê, que o convidou para integrar a gravadora 30PRAUM. Em janeiro de 2021, Teto assinou com a gravadora, dando início definitivo à sua carreira profissional.</p>
            </section>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.15} speed={1} style={{ zIndex: "2" }} >
          <section className="divisor">
            <h1><span>DISCOGRAFIA</span></h1>
          </section>

          <section className="albumSection">
            <h1 className="sectionTitle">2020 - 2021</h1>
            <div className="albuns">
              <CompStuff musicName={"Saturno"} musicCover={saturno} musicLink={"https://open.spotify.com/intl-pt/track/57F1JjEgEFFF4NNGxTOCz7?si=1755580892d04793"}></CompStuff>
              <CompStuff musicName={"M4"} musicCover={m4} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Prévias.zip"} musicCover={previas} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Groupies"} musicCover={groupies} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Mustang Preto"} musicCover={groupies} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
            </div>
          </section>

          <section className="albumSection">
            <h1 className="sectionTitle">2021 - 2022</h1>
            <div className="albuns">
              <CompStuff musicName={"Vampiro"} musicCover={vampiro} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Fim de Semana no Rio"} musicCover={fdsnorio} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Mateca x Teto"} musicCover={matecaxteto} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
            </div>
          </section>

          <section className="albumSection">
            <h1 className="sectionTitle">2023 - 2024</h1>
            <div className="albuns">
              <CompStuff musicName={"Flow Espacial"} musicCover={flowespacial} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Minha Vida é um Filme"} musicCover={mveuf} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Mais um Voo"} musicCover={maisumvoo} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
            </div>
          </section>

          <section className="albumSection">
            <h1 className="sectionTitle">2024 - 2025</h1>
            <div className="albuns">
              <CompStuff musicName={"zumzumzum"} musicCover={zumzumzum} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"Problemas de um Milionário"} musicCover={pdum} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"tempo.zip"} musicCover={tempozip} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
              <CompStuff musicName={"MAIOR QUE O TEMPO"} musicCover={maiorqueotempo} musicLink={"https://open.spotify.com/album/0yqUVjjoQFD1wtu4OJSNM3?si=HwcwfPUKQFycQOnnL1-dkw"}></CompStuff>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer style={{zIndex: "2",}} offset={3.8} speed={1}>
            <footer className="rodape">
              <p>Site criado puramente para fíns acadêmicos, espero que tenha gostado ^w^ !</p>
              <p>criado e desenhado por: <span><a href="https://x.com/Tomodach1_Nap">domo</a></span></p>
            </footer>
          </ParallaxLayer>

      </Parallax >
    </div >
  )
}

export default App

// DÁ O NPM RUN BUILD ANTES DE MANDAR PRA VERCEIL OKKKK????