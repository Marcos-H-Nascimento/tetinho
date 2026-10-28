import './index.css'

function CompStuff({ musicName, musicCover, musicLink }) {
    return (
        <div className="tiltCard">
            <img src={musicCover} alt="" className="musicCover" />
            <h1 className='musicName'>
                {musicName}
            </h1>
            <a href={musicLink} className="musicLink"><i className="fa-brands fa-spotify"></i> Escutar agora</a>
        </div>
    )
}

export default CompStuff