
import aboutpng from './../assets/images/about.png';

export const AboutComponent = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <img src={ aboutpng } alt=""/>
        </div>

        <div className="about-content">
            <h2 className="heading">Acerca de <span>Mi</span></h2>
            <h3>Hola, Estoy aquí para ayudarte en tu nuevo proyecto!</h3>
            <p>Soy un desarrollador de software con mas de 4 años de experiencia, Como profesional 3 años y como freelance 1 año.
            Tengo experiencia en desarrollo de aplicaciones web, aplicaciones móviles, enseñanza y dirección de grupos.
            Descarga mi CV para mas información.
            </p>
            <a href="#" className="btn">Ir a inicio</a>
        </div>
    </section>
  )
}
