import Nav from "./Nav.jsx"

function Header() {
  return (
    <header className="w-full bg-(--color-secondary) text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-base-style heading-base heading-h1 text-(--color-primary) pt-3">Interpretes y Peliculas</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
