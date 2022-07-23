import './filme.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

export const Filme = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [filme, setFilme] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function getFilme() {
         await api
            .get(`/movie/${id}`, {
               params: {
                  api_key: process.env.REACT_APP_API_KEY,
                  language: 'pt-BR',
               },
            })
            .then((response) => {
               setFilme(response.data);
               setLoading(false);
            })
            .catch(() => {});
      }
      getFilme();

      return () => {
         console.log('Componente desmontado!');
      };
   }, [id]);

   if (loading) {
      return <Loading />;
   }

   return (
      <div className="filme-info">
         <h1>{filme.title}</h1>
         <img
            src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
            alt={filme.title}
         />

         <h3>Sinopse</h3>
         <span>{filme.overview}</span>

         <strong>Avaliação: {filme.vote_average} / 10</strong>

         <div className="buttons">
            <button>Salvar</button>
            <button>
               <a href="#">Trailer</a>
            </button>
         </div>
      </div>
   );
};
