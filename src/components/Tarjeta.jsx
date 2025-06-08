import { $cancionActual } from '../store'
import './Tarjeta.css'

export default function ({
    artista, titulo, album, audioUrl, imgUrl
}) {

const handlerClick =() => {
    $cancionActual.set({
        titulo,
        artista,
        album,
        audioUrl,
        imgUrl
    })
}
  
    return (
        <div>
            <h2>{artista}</h2>
            <p>{titulo}</p>
            <p>{album}</p>
            <img src={imgUrl} alt={titulo} />
            <button onClick={handlerClick}>Play</button>
        </div>
    )
}