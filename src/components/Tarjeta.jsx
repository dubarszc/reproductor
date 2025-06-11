import { FaPlay } from "react-icons/fa";
import { $cancionActual } from '../store'
import './Tarjeta.css'

export default function ({
    imgUrl, titulo, audioUrl
}) {

const handlerClick =() => {
    $cancionActual.set({
        imgUrl,
        titulo,
        audioUrl
    })
}
  
    return (
        <div className='tarjeta'>
            <img src={imgUrl} alt={titulo} />
          
            <p>{titulo}</p>
            
            <button onClick={handlerClick}><FaPlay /></button>
        </div>
    )
}