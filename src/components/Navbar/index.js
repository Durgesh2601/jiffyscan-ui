import logo from "../../assets/logo.svg";
import lightning from "../../assets/lightning.svg";
import arrow from "../../assets/arrow.svg";
import avatar from "../../assets/avatar.svg";
import theme from "../../assets/theme.svg";
import user from "../../assets/user.svg";
import dashbboard from "../../assets/dashboard.svg";
import code from "../../assets/code.svg";
import logOut from "../../assets/log-out.svg";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-link">
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
      </div>

      <div>
        <div className="right">
          <div className="right-search">
            <div className="input-container">
              <span className="icon-start">
                <img src={lightning} alt="lightning" />
              </span>
              <span className="icon-dropdown">
                <img src={arrow} alt="arrow" />
              </span>
              <span className="icon-divider"></span>
              <input type="text" placeholder="Search Board..." />
            </div>
          </div>

          <div className="right-profile">
            <img src={avatar} alt="Profile" />
            <div className="profile-dropdown">
              <span>Olivia Rhye</span>
              <div className="dropdown-content">
                <div>
                  <img src={user} alt="user" />
                  <a href="/">View profile</a>
                </div>
                <div>
                  <img src={dashbboard} alt="dashboard" />
                  <a href="/">Dashboard</a>
                </div>
                <div>
                  <img src={code} alt="api" />
                  <a href="/">API</a>
                </div>
                <div>
                  <img src={logOut} alt="logout" />
                  <a href="/">Log out</a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-theme-toggle">
            <img src={theme} alt="theme" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
