import { useState, useEffect } from "react";
import "../styles/HeaderNav.scss";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state variables to pronounce and hide header on two scrolls
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Effect to handle scroll behaviour
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        setIsHidden(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependencies to ensure it runs only once on mount

  // Effect to handle window resize and close the menu
  useEffect(() => {
    const handleResize = () => {
        if (isMenuOpen && window.innerWidth >= 1024) {
            setIsMenuOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Effect to manage the no-scroll class on body
  useEffect(() => {
    if (isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return () => {
        document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${isMenuOpen ? "expanded" : ""}${
        isScrolled ? " with-border" : ""
      }${isHidden ? " hidden" : ""}`}
    >
      <button
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-menu-content" tabIndex="-1">
          <span className="sr-only">Menu</span>
          <span className="bar" id="bar1"></span>
          <span className="bar" id="bar2"></span>
          <span className="bar" id="bar3"></span>
        </span>
        {/* end hamburger-menu-content */}
      </button>
      <a className={`logo ${isMenuOpen ? "hide" : ""}`} href="#0">
        <img src="images/logo.svg" alt="site-logo"></img>
      </a>
      <nav id="main-navigation" className={isMenuOpen ? "show" : ""}>
        <ul>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Breaking News
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Front-End
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Back-End
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Web Design
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Cloud
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
