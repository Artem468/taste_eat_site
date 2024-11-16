import "./ClientsSay.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

function ClientsSay() {
    return (
        <section className="ClientsSay">
            <div>
                <p>TESTIMONIAL</p>
                <p>Our Clients Say</p>
                <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                className="SwiperCard"
            >
                <SwiperSlide>
                    <div>
                        <p>qweqwe</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>qweqwe</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>qweqwe</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p>qweqwe</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default ClientsSay