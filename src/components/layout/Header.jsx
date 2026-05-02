// Header
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const getLiClass = ({ isActive }) =>
    `nav-item group ${isActive ? "bg-primary-light text-white" : ""}`;

  const linkClass = "nav-link block w-full";

  return (
    <>
      <nav className={`nav-bar ${activeMenu ? "menu-show-hide" : ""}`}>
        <img src={logo} className="logo-img" alt="Website Logo" />

        <ul className="nav-menu">
          <NavLink to="/" className={getLiClass}>
            <li>
              <span className={linkClass}>Home</span>
            </li>
          </NavLink>

          <NavLink to="/about" className={getLiClass}>
            <li>
              <span className={linkClass}>About</span>
            </li>
          </NavLink>

          <NavLink to="/review" className={getLiClass}>
            <li>
              <span className={linkClass}>Review</span>
            </li>
          </NavLink>

          <NavLink to="/contact" className={getLiClass}>
            <li>
              <span className={linkClass}>Contact</span>
            </li>
          </NavLink>
        </ul>
      </nav>

      <Bars3Icon
        className="nav-icon"
        onClick={() => setActiveMenu(!activeMenu)}
      />
    </>
  );
};

export default Header;