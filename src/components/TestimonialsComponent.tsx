import { useEffect, useRef } from "react";
import Swiper from "swiper";

import testimonial1 from "./../assets/images/testimonial1.jpg";
import testimonial2 from "./../assets/images/testimonial2.jpg";
import testimonial3 from "./../assets/images/testimonial3.jpg";

export const TestimonialsComponent = () => {

  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });
    }
  }, []);

  return (
    <div className="testimonial-container">
        <h2 className="heading">Valuable <span>Testimonial</span></h2>

        <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper" ref={ swiperRef }>
                <div className="testimonial-content swiper-wrapper">
                    <div className="testimonial-slide swiper-slide">
                        <img src={ testimonial1 } alt=""/>
                        <h3>Jackson Levi</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                            iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                            assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                            provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                            aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                            dolores.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={ testimonial2 } alt=""/>
                        <h3>Flora Ocean</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                            iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                            assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                            provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                            aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                            dolores.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={ testimonial3 } alt=""/>
                        <h3>Julian Grayson</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                            iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                            assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                            provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                            aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                            dolores.</p>
                    </div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
  )
}
