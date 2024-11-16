import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import "./ClientsSay.css"
import {ClientsSayData} from "./ClientsSayData.js";
import zapiataia from "./assets/zapiataia.svg"
import lamps from "./assets/lamps.svg"

function ClientsSay() {
    return (
        <>
            <section className="ClientsSay">
                <div className="ClientsSayText">
                    <p>TESTIMONIAL</p>
                    <p>Our Clients Say</p>
                    <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
                </div>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="ClientsSaySwiper"
                    slidesPerView={3}
                    spaceBetween={50}>
                    {
                        ClientsSayData.map(
                            (item, index) =>
                                <SwiperSlide key={index} className="clientSlide">
                                    <div className="clientComment">
                                        <div className="ClientData">
                                            <div className="clientPhoto">
                                                <img src={zapiataia} alt=''/>
                                                <img src={item.image} alt=''/>
                                            </div>
                                            <div className="clientInfo">
                                                <p>{item.name}</p>
                                                <p>{item.city}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="ClientsCommentData">
                                            <p>{item.comment}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        )
                    }
                </Swiper>
            </section>
            <div className='lamps'>
                <img src={lamps} alt=""/>
            </div>
        </>
    )
}

export default ClientsSay