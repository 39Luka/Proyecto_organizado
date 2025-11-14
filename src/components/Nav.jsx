import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex space-x-4">
      <Link
        to="/inicio"
        className="px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
      >
        Inicio
      </Link>

      <Link
        to="/peliculas"
        className="px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
      >
        Películas
      </Link>

      <Link
        to="/interpretes"
        className="px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
      >
        Intérpretes
      </Link>

      <Link
        to="/admin"
        className="px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
      >
        Admin
      </Link>
    </nav>
  );
}

export default Nav;
