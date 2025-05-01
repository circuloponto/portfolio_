import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

function Navbar() {
  const navRef = useRef();
  const buttonRef = useRef(); //é o x de saida
  const hamburgerButton = useRef(); //é o x de saida

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    buttonRef.current.classList.toggle('showXbutton');
    hamburgerButton.current.classList.toggle('hideHamburgerButton');
    document.body.classList.toggle('no-scroll');
  };
  const hideNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    buttonRef.current.classList.toggle('showXbutton');
    hamburgerButton.current.classList.toggle('hideHamburgerButton');
    document.body.classList.toggle('no-scroll');
    //buttonRef.current.classList.toggle('grid_nav');
  };
  /* useEffect(() => {
    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('nav li a');

    window.onscroll = () => {
      console.log('it WORKS');
      sec.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
          console.log('top is >=');
          links.forEach((link) => {
            console.log('inside the loop');
            link.classList.remove('active');
            document
              .querySelector('nav li a[href*=' + id + ']')
              .classList.add('active');
          });
        }
      });
    };
  }); */
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1);

  const clamp = (value) => Math.max(0, value);

  const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

  // hooks
  const useScrollspy = (ids, offset = 0) => {
    console.log('ITS CALLED');
    const [activeId, setActiveId] = useState('');

    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.scrollY;

        const position = ids
          .map((id) => {
            const element = document.getElementById(id);

            if (!element) return { id, top: -1, bottom: -1 };

            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);

            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));

        setActiveId(position?.id || '');
      };

      listener();

      window.addEventListener('resize', listener);
      window.addEventListener('scroll', listener);

      return () => {
        window.removeEventListener('resize', listener);
        window.removeEventListener('scroll', listener);
      };
    }, [ids, offset]);

    return activeId;
  };
  const ids = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeId = useScrollspy(ids, 0); // 54 is navigation height

  return (
    <header className="header">
      {/*  <Pattern /> */}
      <h3>
        <div className="logoContainer">
          <div className="logo"></div>
          <a className="logoText" href="#section1">
            {/* <span>P</span> */}PORTFOLIO
          </a>
        </div>
      </h3>
      <nav className="nav" ref={navRef}>
        {ids.map((id) => (
          <li key={`menu-item-${id}`} className="menu-item">
            <a
              href={`#${id}`}
              className={clsx(
                'menu-link',
                id === activeId && 'menu-link-active'
              )}
              onClick={hideNavbar}
            >
              {capitalize(id)}
            </a>
          </li>
        ))}
        {/* <li>
          <a onClick={hideNavbar} href="#section1">
            Home
          </a>
        </li> */}
        {/*  <li>
          <a
            className="afterMenuItems"
            onClick={hideNavbar}
            href="#section2">
            About
          </a>
        </li>

        <li>
          <a className="afterMenuItems" onClick={hideNavbar} href="#section3">
            Skills
          </a>
        </li>
        <li>
          <a className="afterMenuItems" onClick={hideNavbar} href="#section4">
            Projects
          </a>
        </li>
        <li>
          <a className="afterMenuItems" onClick={hideNavbar} href="#section5">
            Contact
          </a>
        </li> */}

        <div className="socials">
          <a
            className="button tick"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/nuno-cortez-31072314/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="linkedin"
              fill="#ea3d3c"
              width="35px"
            >
              <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/circuloponto"
            className="button tick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="github"
              fill="#ea3d3c"
              width="35px"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
          </a>
        </div>

        <button
          //id="hamburgerToClose"
          className="nav-btn nav-close-btn hamburgerToClose"
          ref={buttonRef}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" ref={hamburgerButton} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
