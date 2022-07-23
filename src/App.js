import RoutesApp from './routes';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   return (
      <div className="app">
         <ToastContainer autoClose={1500} transition={Flip}  theme="colored"/>
         <RoutesApp />
      </div>
   );
}

export default App;
