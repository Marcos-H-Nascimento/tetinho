import './index.css'

function CompStuff({ musicName, musicCover, musicLink }) {
    return (
        <div className="tiltCard">
            <img src={musicCover} alt="" className="musicCover" />
            <h2 className='musicName'>
                {musicName}
            </h2>
            <a href={musicLink} className="musicLink"><i className="fa-brands fa-spotify"></i> Escutar agora</a>
        </div>
    )
}

export default CompStuff