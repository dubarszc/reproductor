import { $cancionActual } from '../store'
import './SongBar.css'
import React from 'react'

export default function (){
    const [cancionActual, setCancionActual] = React.useState(null)

    const audioRef = React.useRef(null)

    React.useEffect(() => {
        $cancionActual.subscribe((song) => {
            setCancionActual(song)
        })
    }, [])


    const handlerClick = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }
    return (
        song
        ? <>
            <div className='song-bar'>
                <div className='song-bar__info'>
                    <div className='song-bar__info__imge'>
                        <img src={cancion.image.url} alt="" />
                    </div>
                    <div className='song-bar__info__details'>
                        <h4 className='song-bar__info__details__title'>{cancionActual.title}</h4>
                        <p className='song-bar__info__details__artist'>{cancionActual.artista}</p>
                    </div>
                </div>
                <div className='song-bar__controls'>
                    <div className='song-bar__controls__buttons'>
                        <audio src={cancion.audio.url} autoPlay ref={audioRef}></audio>
                    </div>
                </div>
                <div className='song-bar__extra' onClick={handlerClick}>
                    <button>Play</button>
                </div>
            </div>
        </>
            : <></>
    )
}
