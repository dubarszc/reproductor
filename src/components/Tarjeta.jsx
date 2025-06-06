import './Tarjeta.css'

export default function ({
    artista, titulo, album
}) {

const handlerClick =() => {
    console.log('Cilick en la cancion')
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