function Seccion({ children, titulo, subtitulo }) {
  return (
    <section
      aria-labelledby="main-section-title"
      className="w-full max-w-7xl text-center"
    >
      {titulo && (
        <h1
          id="main-section-title"
          className="heading-base heading-h1 not-even:text-(--color-primary)"
        >
          {titulo}
        </h1>
      )}
      
      {subtitulo && (<p className="text-base-style text-large pt-4">{subtitulo}</p>
      )}
    
      <div role="Grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
      {children}
      </div>

    </section>
  );
}
export default Seccion;
