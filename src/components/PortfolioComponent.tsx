
import portfolio1 from './../assets/images/portfolio1.jpg';
import portfolio3 from './../assets/images/pokemoncel.jpg';
import portfolio4 from './../assets/images/portafolio.png';
import portfolio5 from './../assets/images/ChatApp.png';
import portfolio6 from './../assets/images/portfolio4.png';
import portfolio7 from './../assets/images/Swatch.png';
import portfolio8 from './../assets/images/Admin.png';
import portfolio9 from './../assets/images/antostore.png';

import videoMaps from './../assets/images/MapasApp.mp4';
import { useEffect } from 'react';

export const PortfolioComponent = () => {


    const autoPlayVideo = (video: any) => {
        video.play();
    }

    useEffect(() => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('mouseover', () => autoPlayVideo(video));
            video.addEventListener('mouseout', () => video.pause());
        });
    }, [])
    

  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Últimos <span>Proyectos</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={ portfolio1 } alt="sebcompanyes.com" style={{ objectFit: 'cover' }}/>

                <div className="portfolio-layer">
                    <h4>Diseño Web + App Laravel ( Php )</h4>
                    <p>Proyecto final de alumna</p>
                    <a target='_blank' href="https://sebcompanyes.com"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <video id='video' width="100%" height="100%" loop autoPlay>
                    <source src={ videoMaps } type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <div className="portfolio-layer">
                    <h4>React + Sockets</h4>
                    <p>Aplicacion web con navegacion de mapas en tiempo real.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img style={{ maxHeight: 180, objectFit: 'cover' }} src={ portfolio3 } alt=""/>

                <div className="portfolio-layer">
                    <h4>Aplicación Móvil</h4>
                    <p>Mi primer desarrollo y despliegue de una app moderna en iOS & Android.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio4 } alt=""/>

                <div className="portfolio-layer">
                    <h4>Diseño Web</h4>
                    <p>Mi primer portafolio, que por lastima el hosting eliminó todo rastro de backup.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio5 } alt=""/>

                <div className="portfolio-layer">
                    <h4>React TS + Sockets</h4>
                    <p>De mis primeros proyectos personales galardonados en competencias un Chat web en tiempo real.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio6 } alt=""/>

                <div className="portfolio-layer">
                    <h4>Diseño web y React + Node</h4>
                    <p>Aplicación de llamados de turnos a asesores en tiempo real.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio7 } alt=""/>

                <div className="portfolio-layer">
                    <h4>Php + Mysql</h4>
                    <p>Eccomerce de ventas de reloj.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio8 } alt=""/>

                <div className="portfolio-layer">
                    <h4>Dashboard admin</h4>
                    <p>Eccomerce admin dashboard de ventas de reloj.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={ portfolio9 } alt=""/>

                <div className="portfolio-layer">
                    <h4>AntoStore</h4>
                    <p>Mi primer intento como autonomo, actualmente cerrado!.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="">
                <h2>Proximamente estaré subiendo mis ultimos proyectos ya que estos llevan un backend y otros son moviles...</h2>
            </div>
        </div>
    </section>
  )
}
