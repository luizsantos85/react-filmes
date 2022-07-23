import React from 'react';
import {Link} from 'react-router-dom'
import './notfound.css';

export const NotFound = () => {
   return (
      <div className='notfound'>
         <h1>404</h1>
         <h2>Ops... Página não encontrada!</h2>
         <Link to='/'>LISTA DE FILMES - Clique aqui.</Link>
      </div>
   );
};
