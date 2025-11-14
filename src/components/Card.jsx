function Card(props) {
    const { id, foto, nombre, esNota10, rutaBase } = props;
    return (

        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`heading-base heading-h5 ${
                    esNota10 ? "text-red-600" : "text-(--color-primary)"
                    }`}
                >
                    {/* Nombre del intérprete */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete destacado</em>}
                </h2>
            </header>
            {/* Biografía o descripción */}
            <p className="text-base-style text-medium">
                {props.children}
            </p>
        </article>
    );
}

export default Card;