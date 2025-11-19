import { Link } from "react-router-dom";
import Card from "../components/Card";
import Seccion from "../components/Seccion";
import peliculas from "../data/peliculas";

function Peliculas() {
 return (
  <Seccion titulo="Películas Destacadas" subtitulo="Listado de películas:">

       {peliculas.map((pelicula, index) => ( 
          <Link 
          key={index} 
          to={`/peliculas/${index+1}`}
          className="contents">
            <Card
                key={index+1}
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
