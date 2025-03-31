import logo from './logo512.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <header className="Header-header">

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
