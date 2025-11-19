import Header from "./components/Header.jsx";
import MainContent from "./pages/MainContent.jsx";
import Interpretes from "./pages/Interpretes.jsx";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Peliculas from './pages/Peliculas.jsx';
import Admin from './pages/Admin.jsx';
import Seccion from "./components/Seccion.jsx";
import DetalleInterprete from "./pages/DetalleInterprete.jsx";
import DetallePelicula from "./pages/DetallePelicula.jsx";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route index element={<Home />} />    
          <Route path="inicio" element={<Home />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="interpretes" element={<Interpretes />} />
          <Route path="admin" element={<Admin />} />

          <Route path="interpretes/:id" element={<DetalleInterprete />} />
          <Route path="peliculas/:id" element={<DetallePelicula />} />



          <Route path="*" element={<Seccion titulo="Página no encontrada"/>} />
        </Route>

      </Routes>    
    </>
  )
}

export default App