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
                        <div className="card max-h-full lg:card-side bg-base-100">
                            <Link to='https://go-parcel-book-store.web.app' className="lg:w-80 md:w-auto">
                                <img
                                    src={"https://i.ibb.co/N1LMYxr/screencapture-go-parcel-book-store-web-app-2024-07-04-16-25-47.png"}
                                    alt="Album" />
                            </Link>
                            <div className="card-body lg:flex-1">
                                <h2 className="text-5xl font-bold">Fast Delivery</h2>
                                <p><samp className="font-bold">Description:</samp> Welcome to Fast delivery – Your Ultimate Parcel Delivery Solution! Fast delivery is a cutting-edge parcel management platform designed to revolutionize the way you handle deliveries. Whether you are a customer looking to send a parcel swiftly, an admin managing logistics, or a delivery person ensuring timely arrivals, Fast delivery offers a seamless and efficient experience for everyone involved.</p>
                                <p><span className="font-bold">Live link:</span>https://go-parcel-book-store.web.app</p>
                                <p><span className='font-bold'>Github Client site Link:</span>https://github.com/rafaulgoni/Fast-Delivery-Client-site</p>
                                <p><span className='font-bold'>Github server site Link:</span>https://github.com/rafaulgoni/Fast-Delivery-server-site</p>
                                <div className="card-actions justify-end">
                                    <Link to="https://github.com/rafaulgoni/Fast-Delivery-Client-site" className="font-bold btn bg-[#1791c8] flex items-center space-x-2">Read more <span className="pl-2"><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-h-full lg:card-side bg-base-100">
                            <Link to='https://assignment11-royal-service.web.app' className="lg:w-80 md:w-auto">
                                <img
                                    src={"https://i.ibb.co/crPWR8w/screencapture-assignment11-royal-service-web-app-2024-07-04-16-35-07.png"}
                                    alt="Album" />
                            </Link>
                            <div className="card-body md:flex-1">
                                <h2 className="text-5xl font-bold">Royal Service</h2>
                                <p><samp className="font-bold">Description:</samp> Loyal Service is a user-friendly service-sharing platform where users can offer and book a wide range of services. Our platform bridges the gap between service providers and users, facilitating seamless connections and engagements. With intuitive navigation and dynamic features, Loyal Service ensures an effortless and efficient user experience.</p>
                                <p><span className="font-bold">Live link:</span>https://assignment11-royal-service.web.app</p>
                                <p><span className='font-bold'>Github client site Link:</span>https://github.com/rafaulgoni/Royal-Service-Client-site</p>
                                <p><span className='font-bold'>Github server site Link:</span>https://github.com/rafaulgoni/Royal-Service-server-site</p>
                                <div className="card-actions justify-end">
                                    <Link to="https://github.com/rafaulgoni/Royal-Service-Client-site" className="font-bold btn bg-[#1791c8] flex items-center space-x-2">Read more <span className="pl-2"><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card max-h-full lg:card-side bg-base-100">
                            <Link to='https://b9a10-191bd.web.app' className="lg:w-80 md:w-auto">
                                <img
                                    src={"https://i.ibb.co/bFQ1PLG/screencapture-b9a10-191bd-web-app-2024-07-04-16-39-09.png"}
                                    alt="Album" />
                            </Link>
                            <div className="card-body md:flex-1">
                                <h2 className="text-5xl font-bold">Artful Abode</h2>
                                <p><samp className="font-bold">Description:</samp> Welcome to Artful Abode, a sanctuary of sophistication and elegance where every detail is meticulously crafted to create an unparalleled living experience. Our commitment to excellence ensures that you will indulge in the finest amenities and services, all designed to cater to your every desire.</p>
                                <p><span className="font-bold">Live link:</span>https://b9a10-191bd.web.app</p>
                                <p><span className='font-bold'>Github client site Link:</span>https://github.com/rafaulgoni/Artful-Abode-Client-Site</p>
                                <p><span className='font-bold'>Github server site Link:</span>https://github.com/rafaulgoni/Artful-Abode-server-Site</p>
                                <div className="card-actions justify-end">
                                    <Link to="https://github.com/rafaulgoni/Artful-Abode-Client-Site" className="font-bold btn bg-[#1791c8] flex items-center space-x-2">Read more <span className="pl-2"><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;