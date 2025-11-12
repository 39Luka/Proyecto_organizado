import Seccion from "./components/Seccion.jsx";
import Interpretes from "./components/Interpretes.jsx";
import peliculas from "./data/peliculas";
import Header from "./components/Header.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Seccion />}>
        <Route path="inicio" element={<Home />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="interpretes" element={<Interpretes />} />
       <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>

    <Seccion titulo="Intérpretes de películas destacadas">
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">

          {peliculas
          // .filter(pelicula => pelicula.clasificacion === "Drama") // solo películas de Drama
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Interpretes
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10} // pasamos si la nota es 10
              >
                {actor.biografia}
              </Interpretes>
            ))
          )}
        </div>
    </Seccion>
    </>
  )
}

export default App