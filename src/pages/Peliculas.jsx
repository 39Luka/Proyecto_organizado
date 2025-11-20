import { Link } from "react-router-dom";
import Card from "../components/Card";
import Seccion from "../components/Seccion";
import peliculas from "../data/peliculas";

function Peliculas() {
     return (
          <Seccion titulo="Películas Destacadas" subtitulo="Listado de películas:">

               {/* Se recorre cada pelicula y se genera una card de esta con un link que lleva a la página peliculas/idPelicula */}
               {peliculas.map((pelicula, index) => (
                    <Link
                         key={index}
                         to={`/peliculas/${pelicula.id}`}
                         className="contents">
                         <Card
                              key={pelicula.id}
                              nombre={pelicula.nombre}
                              foto={pelicula.cartelera}
                         >
                              {pelicula.resumen}
                         </Card>
                    </Link>
               ))
               }

          </Seccion >
     );
}
export default Peliculas;
