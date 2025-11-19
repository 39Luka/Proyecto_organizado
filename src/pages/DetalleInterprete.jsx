import { Link, useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

function DetalleInterprete() {
    const { id } = useParams();

    const actores = peliculas.flatMap(pelicula => pelicula.actores);
    const interprete = actores[Number(id)];

    if (!interprete) return <p className="text-center mt-8">Intérprete no encontrado</p>;

    return (
        <>
            <section className="max-w-5xl mx-auto mt-8 p-4">
                <nav className="w-full flex justify-end mt-4">
                    <Link to="/interpretes">
                        <button className="px-4 py-2 bg-(--color-primary) text-white font-bold rounded hover:bg-(--color-secondary) hover:text-(--color-primary) transition">
                            Volver
                        </button>
                    </Link>
                </nav>

                <figure className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                        src={interprete.imagen}
                        alt={`Foto de ${interprete.nombre}`}
                        className="w-full md:w-64 rounded-lg object-cover"
                    />
                    <figcaption className="flex-1">
                        <h2 className="heading-base heading-h3 text-(--color-primary) mb-4">
                            {interprete.nombre}
                        </h2>
                        <p className="text-base-style text-medium">{interprete.biografia}</p>
                    </figcaption>
                </figure>
            </section>

        </>
    );
}

export default DetalleInterprete;
