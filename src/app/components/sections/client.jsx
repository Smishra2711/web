"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ClientSection() {
    return (
        <section id="clients" className="clients section">
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 5000
                    }}
                    slidesPerView="auto"
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 60
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 80
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 120
                        }
                    }}
                    className="align-items-center"
                >
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-1.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-2.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-3.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-4.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-5.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-6.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-7.webp" className="img-fluid" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://bootstrapmade.com/content/demo/Devin/assets/img/clients/clients-8.webp" className="img-fluid" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}