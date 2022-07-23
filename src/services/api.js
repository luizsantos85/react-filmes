//base url  https://api.themoviedb.org/3/
//url movie/now_playing?api_key=.....

import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3',
});
