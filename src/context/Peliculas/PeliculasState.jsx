import React, { useReducer } from 'react'
import PeliculasContext from './PeliculasContext'
import PeliculasReducer from './PeliculasReducer'

const initialState = {
    peliculas: [
        {
            id:1,
            nombre: "StarWars Episodie 3",
            categoria: "Ciencia Ficción",
            precio: 150
        },
        {
            id:2,
            nombre: "Spiderman in to the multiverse",
            categoria: "Ciencia Ficción",
            precio: 200
        },
        {
            id:3,
            nombre: "Dragon ball super: super Hero",
            categoria: "Animada",
            precio: 300
        },
    ]
}

const PeliculasState = ({children}) => {

    const [globlaState, dispatch] = useReducer(PeliculasReducer, initialState)

  return (
   <>
    <PeliculasContext.Provider value={{peliculas: initialState.peliculas}}>
        {children}
    </PeliculasContext.Provider>
   </>
  )
}

export default PeliculasState