import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  const handleHover = (path) => {
    if (path !== activePage) {
      setActivePage(path);
      navigate(path);
    }
  };

  return (
    <div className="navLinks">
      <ul className="navBar">
        <li
          className={currentPage === "/" ? "navPages active" : "navPages"}
          onMouseOver={() => handleHover("/")}
        >
          <Link to="/">
            <span className="navIcon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="navTitle">Home</span>
          </Link>
        </li>
        <li
          className={currentPage === "/about" ? "navPages active" : "navPages"}
          onMouseOver={() => handleHover("/about")}
        >
          <Link to="/About">
            <span className="navIcon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="navTitle">About Me</span>
          </Link>
        </li>
        <li
          className={currentPage === "/resume" ? "navPages active" : "navPages"}
          onMouseOver={() => handleHover("/resume")}
        >
          <Link to="/Resume">
            <span className="navIcon">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            <span className="navTitle">Resume</span>
          </Link>
        </li>
        <li
          className={
            currentPage === "/portfolio" ? "navPages active" : "navPages"
          }
          onMouseOver={() => handleHover("/portfolio")}
        >
          <Link to="/portfolio">
            <span className="navIcon">
              <ion-icon name="git-branch-outline"></ion-icon>
            </span>
            <span className="navTitle">Portfolio</span>
          </Link>
        </li>
        <li
          className={
            currentPage === "/contact" ? "navPages active" : "navPages"
          }
          onMouseOver={() => handleHover("/contact")}
        >
          <Link to="/contact">
            <span className="navIcon">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </span>
            <span className="navTitle">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
