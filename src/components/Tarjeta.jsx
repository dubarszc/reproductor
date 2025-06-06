import { $cancionActual } from '../store'
import './Tarjeta.css'

export default function ({
    artista, titulo, album, audioUrl
}) {

const handlerClick =() => {
    $cancionActual.set({
        titulo,
        artista,
        album,
        audioUrl
    })
}
  
    return (
        <div>
            <h2>{artista}</h2>
            <p>{titulo}</p>
            <p>{album}</p>
            <button onClick={handlerClick}>Play</button>
        </div>
    )
}