import Card from "../components/Card";
import Seccion from "../components/Seccion";
import peliculas from "../data/peliculas";

function Peliculas() {
 return (
  <Seccion titulo="Películas Destacadas" subtitulo="Listado de películas:">

       {peliculas.map((pelicula, index) => ( 

            <Card
                key={index}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
                >
                {pelicula.resumen}
            </Card>
            ))
       }

  </Seccion >
 );
}
export default Peliculas;
