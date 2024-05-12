import { useRef } from "react";

export const HeaderComponent = () => {

  const menuIconRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    if (menuIconRef.current && navbarRef.current) {
      menuIconRef.current.classList.toggle('bx-x');
      navbarRef.current.classList.toggle('active');
    }
  };

  const handleDarkModeToggle = () => {
    const darkModeIcon = document.querySelector('#darkMode-icon');
    if (darkModeIcon) {
      darkModeIcon.classList.toggle('bx-sun');
      document.body.classList.toggle('dark-mode');
    }
  };

  return (
    <header className="header">
        <a href="#" className="logo">SebCompanyEs</a>

        <nav className="navbar" ref={ navbarRef }>
            <a href="#home" className="active">Inicio</a>
            <a href="#about">Acerca de mi</a>
            <a href="#services">Servicios</a>
            <a href="#portfolio">Portafolio</a>
            <a href="#contact">Contacto</a>
        </nav>

        <div className="bx bx-moon" id="darkMode-icon" onClick={ handleDarkModeToggle }></div>

        <div className="bx bx-menu" onClick={ handleMenuClick } id="menu-icon" ref={ menuIconRef }></div>
    </header>
  )
}
