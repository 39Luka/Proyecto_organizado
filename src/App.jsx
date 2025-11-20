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

      {/* Enrutamiento */}
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route index element={<Home />} />    
          <Route path="inicio" element={<Home />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="interpretes" element={<Interpretes />} />
          <Route path="admin" element={<Admin />} />

          {/* A los interpretes se les debe pasar su pelicula y su index en esa pelicula */}
          <Route path="interpretes/:peliculaId/:actorId" element={<DetalleInterprete />} />
          {/* A las peliculas se les pasa su id que viene del array */}
          <Route path="peliculas/:id" element={<DetallePelicula />} />

          <Route path="*" element={<Seccion titulo="Página no encontrada"/>} />
        </Route>
      </Routes>    
    </>
  );
}

export default App;
