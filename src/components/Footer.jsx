import { $cancionActual } from '../store'
import './Footer.css'
import React from 'react'

export default function (){

    const [cancionActual, setCancionActual] = React.useState(null)

    React.useEffect(() => {

        $cancionActual.subscribe((cancion) => {
            setCancionActual(cancion)
            console.log('cancion actualizada', cancion)
        })
    }, [])
    return(
    <footer>
        {
            cancionActual ? cancionActual.titulo : 'No hay cancion seleccionada'
        }
        <audio src={cancionActual ? cancionActual.audioUrl : ''} autoPlay></audio>
    </footer>
    )
}
