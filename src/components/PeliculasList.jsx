import React,  {useContext} from 'react'

/* Este productcontext esta por default por eso no se colocan las llaves */
import PeliculaContext  from '../context/Peliculas/PeliculasContext';

const PeliculasList = () =>{

    /* Uso de useContext para peliculas */

    const {peliculas} = useContext(PeliculaContext)

    return (
        <>
            <ul>
            { peliculas.map((pelicula) =>(
                    <li key={pelicula.id}>
                        <h1>{pelicula.nombre}</h1>
                        <p>{pelicula.categoria}</p>
                        <p>{pelicula.precio}</p>

                    </li>
            ))}
            </ul>
        </>
    );
};

export default PeliculasList;