import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const toggleBtn = useRef();
  const navLinks = useRef();

  const toggleNav = () => {
    toggleBtn.current.classList.toggle("fa-xmark");
    navLinks.current.classList.toggle("show");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo">GROVNEST</div>
            <i
              className="toggle-btn fa-solid fa-bars"
              ref={toggleBtn}
              onClick={toggleNav}
            ></i>
          </div>
          <div ref={navLinks} className="nav-links">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"about"} className="nav-link">
              About Us
            </Link>
            <Link to={"pricing"} className="nav-link">
              Pricing
            </Link>
            <Link to={"services"} className="nav-link">
              Services
            </Link>
            <Link to={"contact"} className="nav-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
