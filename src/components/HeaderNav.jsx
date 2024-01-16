import { useState, useEffect } from "react";
import "../styles/HeaderNav.css";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state variables to pronounce and hide header on two scrolls
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     // function that will set state variable to track scroll state
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//       setIsHidden(window.scrollY > 150);
//     };

//     const handleResize = () => {
//       // Automatically close the menu if it's open and the window width is greater than or equal to 1024px
//       if (isMenuOpen && window.innerWidth >= 1024) {
//         setIsMenuOpen(false);
//       }
//     };

//     // add event listeners to window
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // dispose when unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMenuOpen]);

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
              News
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Policy
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Business
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Health
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Opinion
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Events
            </a>
          </li>
          <li className="main-navigation-li">
            <a className="main-navigation-a" href="#0">
              Jobs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
