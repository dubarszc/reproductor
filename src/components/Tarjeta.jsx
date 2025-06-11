import { $cancionActual } from '../store'
import './Tarjeta.css'

export default function ({
    imgUrl, artista, titulo, album, audioUrl
}) {

const handlerClick =() => {
    $cancionActual.set({
        imgUrl,
        titulo,
        artista,
        album,
        audioUrl
    })
}
  
    return (
        <div className='tarjeta' onClick={handlerClick}>
            <img src={imgUrl} alt={titulo} />
            <h2>{artista}</h2>
            <p>{titulo}</p>
            <p>{album}</p>
            <button onClick={handlerClick}>Play</button>
        </div>
    )
}