import peliculas from "../data/peliculas";
import Card from "../components/Card.jsx";
import Seccion from "../components/Seccion.jsx";
import { Link } from "react-router-dom";

function Interpretes() {

  {/* Para poder identificar a cada actor se le genera un idPelicula y un idActor basado en el id que tienen las peliculas y el index de cada actor.
    Ya que el index se reinicia por cada pelicula*/}
  const actores = peliculas.flatMap(pelicula =>
    pelicula.actores.map((actor, index) => ({
      ...actor,
      peliculaId: pelicula.id,
      actorId: index
    }))
  );

  return (
    <Seccion
      titulo="Intérpretes de películas destacadas"
      subtitulo="Listado de intérpretes disponibles:"
    >
      {/* Se le asigna un key compuesta por ambos valores y un ruta con ambos */}
      {actores.map((actor) => (
        <Link
          key={`${actor.peliculaId}-${actor.actorId}`}
          to={`/interpretes/${actor.peliculaId}/${actor.actorId}`}
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
