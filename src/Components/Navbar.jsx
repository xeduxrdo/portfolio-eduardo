import { useState } from 'react';
import '../Styles/Navbar.css';
// import { FaComputer } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navIcon, setNavIcon] = useState(false);

  const links = [
    { id: 1, link: 'inicio' },
    { id: 2, link: 'habilidades' },
    { id: 3, link: 'proyectos' },
    { id: 4, link: 'educacion' },
    { id: 5, link: 'contacto' },
  ];

  return (
    <header>
      <nav className='navbar'>
        <a
          className='link-eduardo'
          href='#inicio'>
          Eduardo
          {/* <FaComputer size={30} /> */}
        </a>
        <ul className={navIcon ? 'nav-list-mobile' : 'nav-list'}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='nav-item'>
              <a
                className='nav-link'
                href={`#${link}`}
                onClick={() => setNavIcon(false)}>
                {link.replace('educacion', 'educación')}
              </a>
            </li>
          ))}
        </ul>
        {/* Botón para abrir/cerrar menú */}
        <a
          className='navbar-icon'
          onClick={() => setNavIcon(!navIcon)}>
          {navIcon ? <FaTimes size={20} /> : <FaBars size={20} />}
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
