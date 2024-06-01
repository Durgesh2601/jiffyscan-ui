import "./index.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-profile">
        <img src="profile-pic.jpg" alt="Profile" />
        <div className="profile-dropdown">
          <span>Olivia Rhye</span>
          <div className="dropdown-content">
            <a href="/">View profile</a>
            <a href="/">Dashboard</a>
            <a href="/">API</a>
            <a href="/">Log out</a>
          </div>
        </div>
      </div>
      <div className="topbar-search">
        <input type="text" placeholder="Search Board..." />
      </div>
      <div className="topbar-theme-toggle">
        <button>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Topbar;
