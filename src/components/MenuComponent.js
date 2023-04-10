import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/menu-component.css';

const dummyLinks = [
  {
    'link': '/',
    'name': 'Link 1',
    'id': 'dummy-1'
  },
  {
    'link': '/',
    'name': 'Link 2',
    'id': 'dummy-2'
  },
  {
    'link': '/',
    'name': 'Link 3',
    'id': 'dummy-3'
  },
];

export default function MenuComponent() {

  const [menuOpened, setMenuOpened] = useState(false);

  const clickHandler = () => {
    setMenuOpened(prevState => !prevState);
  }

  return (
    <div className="demo-menu">
      <button className="menu-toggle button" onClick={clickHandler}>
        { menuOpened ? 'Close menu' : 'Open menu' }
      </button>

      <nav className={ menuOpened ? 'show' : 'hide' }>
        <ul className="demo-nav-list">
          {dummyLinks.map((item) => {
            return (
              <li className="demo-menu-item" key={item.id}>
                <Link
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
