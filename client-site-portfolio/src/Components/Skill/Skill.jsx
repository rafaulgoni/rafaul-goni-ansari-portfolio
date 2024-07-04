import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Skill = () => {
    return (
        <div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/cyL9k8c/R-1.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">HTML</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/xmyn0Y2/R-2.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">CSS</h2>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/1R1L9Sn/Java-Script-Language.jpg"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">JavaScript</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/fDYbjqD/react11.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">React.js</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/RQ3szsb/nextjs-logo.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Next.js</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/5sJ0xct/Lanode.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Node.js</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/b2z50nM/Express-JS-101.png"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Express.js</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100">
                            <figure>
                                <img className='h-52 w-28'
                                    src={"https://i.ibb.co/wQNsCNX/Mongo-DB-2021.jpg"}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">MongoDB</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Skill;