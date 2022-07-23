import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import './home.css';

export const Home = () => {
   const [filmes, setfilmes] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function loadingFilmes() {
         const response = await api.get('/movie/now_playing', {
            params: {
               api_key: process.env.REACT_APP_API_KEY,
               language: 'pt-BR',
               page: 1,
            },
         });
         setfilmes(response.data.results.slice(0, 10));
         setLoading(false);
      }

      loadingFilmes();
   }, []);

   if (loading) {
      return <Loading />;
   }

   return (
      <div className="container">
         <div className="lista-filmes">
            {filmes.map((filme) => (
               <article key={filme.id}>
                  <strong>{filme.title}</strong>
                  <img
                     src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                     alt={filme.title}
                  />
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
               </article>
            ))}
         </div>
      </div>
   );
};
