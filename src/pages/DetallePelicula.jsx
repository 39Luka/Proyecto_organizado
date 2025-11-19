import { useParams, Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import Card from "../components/Card";
import Seccion from "../components/Seccion";

function DetallePelicula() {
    const { id } = useParams();
    const pelicula = peliculas.find(p => p.id === Number(id));

    if (!pelicula) {
        return <h2 className="heading-h2">Película no encontrada</h2>;
    }

    return (
        <>
            <section className="max-w-5xl mx-auto mt-8 p-4">

                {/* Navegación */}
                <nav className="w-full flex justify-end mt-4">
                    <Link to="/peliculas">
                        <button
                            style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                            className="px-4 py-2 font-bold rounded hover:opacity-80 transition"
                        >
                            Volver
                        </button>
                    </Link>
                </nav>

                {/* Título principal */}
                <header>
                    <h1 className="heading-h1 heading-base">{pelicula.nombre}</h1>
                </header>

                {/* Cartel */}
                <figure className="max-w-xs w-full mx-auto my-4">
                    <img
                        src={pelicula.cartelera}
                        alt={`Cartelera de ${pelicula.nombre}`}
                        className="w-full h-auto block rounded-lg shadow-md"
                    />
                </figure>

                {/* Información descriptiva */}
                <section aria-labelledby="info-pelicula" className="mb-6 space-y-2">
                    <h2 id="info-pelicula" className="heading-h2 heading-base">Información</h2>
                    <p className="text-normal"><strong>Director:</strong> {pelicula.director}</p>
                    <p className="text-normal"><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
                    <p className="text-normal"><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
                    <p className="text-normal"><strong>Nota:</strong> {pelicula.nota}</p>
                    <p className="text-normal">{pelicula.resumen}</p>
                </section>

                {/* Actores */}
                {pelicula.actores.length > 0 && (
                    <Seccion titulo="Intérpretes" subtitulo="Listado de actores de esta película:">
                        {pelicula.actores.map(actor => (
                            <Card key={actor.id} nombre={actor.nombre} foto={actor.imagen}>
                                {actor.biografia}
                            </Card>
                        ))}
                    </Seccion>
                )}

            </section>
        </>
    );
}

export default DetallePelicula;
