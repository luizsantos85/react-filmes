import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Filme } from './pages/Filme';
import { Favoritos } from './pages/Favoritos';
import { NotFound } from './pages/NotFound';

const RoutesApp = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/filme/:id" element={<Filme />} />

            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesApp;
