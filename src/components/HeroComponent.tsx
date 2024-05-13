
import imageHome from '../assets/images/home.png';
import cv from '../assets/pdf/CV_Sebas_Rosero_2024_actualizado.pdf';

export const HeroComponent = () => {
  return (
    <section className="home" id="home">
        <div className="home-content">
            <h3>Hola, soy</h3>
            <h1>Sebastián Rosero Lopez</h1>
            <p>Autónomo, Profesor, Fullstack Developer & Mobile Developer, 23 años!, Responsable, Competente e Inovador</p>

            <div className="social-media">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
                <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>

            <a href={ cv } download="CV_Sebas_Rosero_2024_actualizado.pdf" className="btn">Descargar CV</a>
        </div>

        <div className="profession-container">
            <div className="profession-box">
                
            {/* @ts-ignore */}
            <div className="profession" style={{ '--i': 0 }}>
                <i className='bx bx-code-alt'></i>
                <h3>Desarrollador Web</h3>
            </div>
            {/* @ts-ignore */}
            <div className="profession" style={{ '--i': 1 }}>
                <i className='bx bxs-devices'></i>
                <h3>Desarrollador Móvil</h3>
            </div>
            {/* @ts-ignore */}
            <div className="profession" style={{ '--i': 2 }}>
                <i className='bx bx-palette'></i>
                <h3>Diseñador Web</h3>
            </div>
            {/* @ts-ignore */}
            <div className="profession" style={{ '--i': 3 }}>
                <i className='bx bx-book-reader'></i>
                <h3>Profesor</h3>
            </div>

                <div className="circle"></div>
            </div>

            <div className="overlay"></div>
        </div>

        <div className="home-img">
            <img src={ imageHome } alt="SebCompany"/>
        </div>
    </section>
  )
}
