// Header.js 

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">GameHost</Link>  
      </h1>

      <nav>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>  
      </nav>
    </header>
  );
}
