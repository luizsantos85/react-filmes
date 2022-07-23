import './favoritos.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Favoritos = () => {
   const [filmes, setFilmes] = useState([]);

   useEffect(() => {
      const myList = localStorage.getItem('@primeflix');
      setFilmes(JSON.parse(myList) || []);
   }, []);

   const handleDestroyListFilm = (id) => {
      let filterFilm = filmes.filter((filme) => {
         return filme.id !== id;
      });
      setFilmes(filterFilm);
      localStorage.setItem('@primeflix', JSON.stringify(filterFilm));
      toast.success('Filme excluído com sucesso!');
   };

   return (
      <div className="favoritos">
         <h1>Meus filmes favorito</h1>

         {filmes.length === 0 && (
            <span className="sem-filmes">
               Você não possui nenhum filme salvo :(
            </span>
         )}

         <ul>
            {filmes.map((filme) => (
               <li key={filme.id}>
                  <span>{filme.title}</span>
                  <div>
                     <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                     <button onClick={() => handleDestroyListFilm(filme.id)}>
                        Excluir
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
