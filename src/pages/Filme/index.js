import './filme.css';
import { useEffect, useState } from 'react';
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
            .catch(() => {
               navigate('/', { replace: true });
               return;
            });
      }
      getFilme();

      return () => {
         console.log('Componente desmontado!');
      };
   }, [id, navigate]);

   const handleFilmSave = () => {
      const myList = localStorage.getItem('@primeflix');
      let filmSave = JSON.parse(myList) || [];
      
      const hasFilm = filmSave.some((filmsSave) => filmsSave.id === filme.id); //verifica se já existe item no localstorage
      if (hasFilm) {
         alert('Filme já incluso');
         return;
      }

      filmSave.push(filme);
      localStorage.setItem('@primeflix', JSON.stringify(filmSave));
      alert('Filme salvo com sucesso!');
   };

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
            <button onClick={handleFilmSave}>Salvar</button>
            <button>
               <a
                  href={`https://youtube.com/results?search_query=${filme.title} trailer`}
                  target="blank"
                  rel="noreferrer"
               >
                  Trailer
               </a>
            </button>
         </div>
      </div>
   );
};
