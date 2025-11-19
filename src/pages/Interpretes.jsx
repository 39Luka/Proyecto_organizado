import peliculas from "../data/peliculas";
import Card from "../components/Card.jsx";
import Seccion from "../components/Seccion.jsx";
import { Link } from "react-router-dom";

function Interpretes() {

  const actores = peliculas.flatMap((pelicula) => pelicula.actores);

  return (
    <Seccion titulo="Intérpretes de películas destacadas" subtitulo="Listado de intérpretes disponibles:">
      {actores.map((actor, index) => (
        <Link
          key={index}
          to={`/interpretes/${index}`}
          className="contents"
        >
          <Card
            nombre={actor.nombre}
            foto={actor.imagen}
            esNota10={actor.nota === 10}
          >
            {actor.biografia}
          </Card>
        </Link>
      ))}
    </Seccion>
  );
}

export default Interpretes;
