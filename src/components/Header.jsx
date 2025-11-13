import Nav from "./Nav.jsx"

function Header() {
  return (
    <header className="w-full bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold tracking-wide">Mi Aplicación</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
