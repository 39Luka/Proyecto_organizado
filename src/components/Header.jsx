import Nav from "./Nav.jsx";

function Header() {
  return (
    <>
    {/* Encabezado principal de la aplicación */}
    <header
      className="w-full bg-(--color-secondary) text-white py-4 shadow-md"
    >
      {/* Contenedor del título y la navegación */}
      <div
        className="container mx-auto flex justify-between items-center px-4"
        role="presentation" // contenedor de estilo sin contenido propio importante
      >
        <h1 className="text-base-style heading-base heading-h1 text-(--color-primary) pt-3">
          Intérpretes y Películas
        </h1>
        <Nav />
      </div>
    </header>
    </>
  );
}

export default Header;
