import peliculas from "../data/peliculas";
import Card from "../components/Card.jsx";
import Seccion from "../components/Seccion.jsx";
import { Link } from "react-router-dom";

function Interpretes() {
  return (
    <Seccion
      titulo="Intérpretes de películas destacadas"
      subtitulo="Listado de intérpretes disponibles:"
    >
      {peliculas.map(pelicula => 
        pelicula.actores.map((actor, index) => (
          <Link
            key={`${pelicula.id}-${index}`}
            to={`/interpretes/${pelicula.id}/${index}`}
            className="contents"
          >
            <Card
              nombre={actor.nombre}
              foto={actor.imagen}
              esNota10={Number(pelicula.nota) === 10}
            >
              {actor.biografia}
            </Card>
          </Link>
        ))
      )}
    </Seccion>
  );
}


export default Interpretes;
