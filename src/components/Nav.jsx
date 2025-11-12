import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex space-x-4">
      <Link
        to="/"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Inicio
      </Link>

      <Link
        to="/peliculas"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Películas
      </Link>

      <Link
        to="/interpretes"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Intérpretes
      </Link>

      <Link
        to="/admin"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Admin
      </Link>
    </nav>
  );
}

export default Nav;
