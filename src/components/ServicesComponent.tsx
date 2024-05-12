
export const ServicesComponent = () => {
  return (
    <section className="services" id="services">
        <h2 className="heading">Mis <span>Servicios</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Desarrollo Web</h3>
                <p>Cuento con mucha experiencia desarrollando software para webs de todo tipo, SPA ( Single page Application ), Eccomerce,
                    Chats, Maps, Web Marketing.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bxs-devices'></i>
                <h3>Desarrollo Móvil</h3>
                <p>A demás del desarrollo web, he ido incursionando en el nuevo mundo de las aplicaciones móviles,
                    Desarrollando aplicaciones para iOS Y Android, React Native | Android Studio & Express.js. </p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-book-reader'></i>
                <h3>Profesor Verificado <i style={{ fontSize: 20 }} className='bx bx-check-circle bx-tada' ></i></h3>
                <p>
                    Soy un profesor verificado en la plataforma
                        <a style={{ marginLeft: 2 }} target="_blank" href="https://www.tusclasesparticulares.com/online/programacion/clases-programacion-fullstack-react-node-express-mongomysql-html-css-php-laravel-react-native-5232756">TUSCLASESPARTICULARES.COM</a>
                        , donde imparto clases de programación Fullstack, React, Node, Express, Mongo, MySQL.
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  )
}
