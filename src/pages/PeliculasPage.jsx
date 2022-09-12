import React from 'react'
import Title from '../components/Title';
import PeliculasList from '../components/PeliculasList';

const PeliculasPage = () => {
  return (
   <>
    <Title titulo="Peliculas"/>
    <main className="container">
      <div className="row">
        <div className="col-md-6">
          <article className="col-md-6">
            <PeliculasList/>
          </article>
        </div>
      </div>
    </main>
   </>
  )
}

export default PeliculasPage;