import logo from "../../assets/logo.svg";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h3>jiffyscan</h3>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Blockchain</a>
        </li>
        <li>
          <a href="/">Developers</a>
        </li>
        <li>
          <a href="/">More</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
