import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/inicio", label: "Inicio" },
    { to: "/peliculas", label: "Películas" },
    { to: "/interpretes", label: "Intérpretes" },
    { to: "/admin", label: "Admin" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative" aria-label="Menú principal">
      {/* Botón hamburguesa solo en móvil */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-(--color-primary) px-2 py-1 border rounded md:hidden"
        aria-controls="menu-movil"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil debajo del header */}
      {isOpen && (
        <ul
          id="menu-movil"
          className="fixed top-20 left-0 w-full bg-(--color-secondary) z-50 flex flex-col gap-4 p-6 md:hidden"
          role="menu"
        >
          {links.map((link) => (
            <li key={link.to} role="Link">
              <NavLink
                to={link.to}
                className="block px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Menú horizontal para escritorio */}
      <ul className="hidden md:flex gap-4" role="menubar">
        {links.map((link) => (
          <li key={link.to} role="none">
            <NavLink
              to={link.to}
              className="px-3 py-2 rounded-md text-medium text-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-write)"
              role="menuitem"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
