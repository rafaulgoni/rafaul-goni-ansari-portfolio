import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './projects.css';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className="md:mt-16 mt-10">
            <div className='border-l-4 border-[#1791c8] mb-4'>
                <div className='ml-2 space-y-2'>
                    <p className='text-[#1791c8] font-bold'>Projects</p>
                    <h1 className='text-4xl font-bold'>My few works</h1>
                    <p className='max-w-[600px]'>Working with HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB to create the visual and interactive aspects of a website.</p>
                </div>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                    <SwiperSlide>
                        <div className="card lg:card-side bg-base-100 border">
                            <figure className="md:w-80 w-auto h-auto">
                                <img
                                    src={"https://i.ibb.co/N1LMYxr/screencapture-go-parcel-book-store-web-app-2024-07-04-16-25-47.png"}
                                    alt="Album" />
                            </figure>
                            <div className="card-body md:flex-1">
                                <h2 className="text-5xl font-bold">Fast Delivery</h2>
                                <p><samp className="font-bold">Description:</samp> Welcome to Fast delivery – Your Ultimate Parcel Delivery Solution! Fast delivery is a cutting-edge parcel management platform designed to revolutionize the way you handle deliveries. Whether you are a customer looking to send a parcel swiftly, an admin managing logistics, or a delivery person ensuring timely arrivals, Fast delivery offers a seamless and efficient experience for everyone involved.</p>
                                <p><span className="font-bold">Live link:</span>https://go-parcel-book-store.web.app</p>
                                <p><span className='font-bold'>Github Link:</span>https://github.com/rafaulgoni/Fast-Delivery-Client-site</p>
                                <div className="card-actions justify-end">
                                    <Link to="https://www.linkedin.com/in/rafaul-goni-ansari" className="font-bold btn bg-[#1791c8] flex items-center space-x-2">Read more <span className="pl-2"><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
            {/* <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="md:w-80 w-auto h-auto">
                    <img 
                        src={"https://i.ibb.co/N1LMYxr/screencapture-go-parcel-book-store-web-app-2024-07-04-16-25-47.png"}
                        alt="Album" />
                </figure>
                <div className="card-body md:flex-1">
                    <h2 className="card-title">Fast Delivery</h2>
                    <p><samp className="font-bold">Description:</samp> Welcome to Fast delivery – Your Ultimate Parcel Delivery Solution! Fast delivery is a cutting-edge parcel management platform designed to revolutionize the way you handle deliveries. Whether you are a customer looking to send a parcel swiftly, an admin managing logistics, or a delivery person ensuring timely arrivals, Fast delivery offers a seamless and efficient experience for everyone involved.</p>
                    <p><span className="font-bold">Live link:</span>https://go-parcel-book-store.web.app</p>
                    <p></p>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-80 max-h-full"
                        src={"https://i.ibb.co/crPWR8w/screencapture-assignment11-royal-service-web-app-2024-07-04-16-35-07.png"}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-80 max-h-full"
                        src={"https://i.ibb.co/bFQ1PLG/screencapture-b9a10-191bd-web-app-2024-07-04-16-39-09.png"}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-80 max-h-full"
                        src={"https://i.ibb.co/QnqNbcX/screencapture-b9a9-real-estate-rafaulgoni-web-app-2024-07-04-16-43-41.png"}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    );
};

export default Projects;