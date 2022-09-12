import React from 'react'
import { BrowserRouter as 
        Router, 
        Routes, 
        Route, 
        Navigate } from 'react-router-dom';
/* Importando componentes */
import NavBar from '../components/NavBar';

/* Importando pages */
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductsPage';
import PeliculasPage from '../pages/PeliculasPage';

const AppRouter = () => {
  return (
    <Router>
        <NavBar/>
        <div className="container pt-5">
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path='/products' element= {<ProductPage/>} />
              <Route path='/peliculas' element= {<PeliculasPage/>} />
                  {/* El navigate se implementa para redirigir a HomePage
                  en caso de que la ruta que se le de no este dentro
                  de las rutas, es como que los mandará a esta parte */}
              <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>
        </div>
    </Router>
  )
};

export default AppRouter