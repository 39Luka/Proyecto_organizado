import peliculas from "../data/peliculas";
import Card from "../components/Card.jsx";
import Seccion from "../components/Seccion.jsx";

function Interpretes() {
  return (
      <Seccion titulo="Intérpretes de películas destacadas" subtitulo="Listado de intérpretes disponibles:">
       
          {peliculas.map((pelicula) =>
            pelicula.actores.map((actor, index) => (
              <Card
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
                rutaBase="/interpretes"
              >
                {actor.biografia}
              </Card>
            ))
          )}
      </Seccion>

  );
}

export default Interpretes;
