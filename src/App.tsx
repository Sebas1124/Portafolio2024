import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import { AboutComponent, FooterComponent, HeaderComponent, HeroComponent, PortfolioComponent, ServicesComponent } from "./components"

export const App = () => {

  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      const top = window.scrollY;

      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderComponent/>

      <HeroComponent/>

      <AboutComponent/>

      <ServicesComponent/>

      <PortfolioComponent/>

      {/* <TestimonialsComponent/>
      
      <ContactComponent/> */}

      <FooterComponent/>

    </>

  )
}
