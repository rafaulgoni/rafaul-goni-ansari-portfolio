import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mt-16">
            <div className="mb-10">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-1/2 relative mb-16 mt-6'>
                            <img src={'https://i.ibb.co/X5VbLpD/SAVE-20220830-165420-025748.jpg'} className="w-3/4 md:h-[473px] rounded-lg shadow-2xl" />
                            <img src={'https://i.ibb.co/NjP8zry/IMG-20240601-021545.jpg'} className="absolute md:h-[332px] w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                        </div>

                        <div className='lg:w-1/2 md:mt-20'>
                            <p className='text-xl font-bold text-[#1791c8]'>About</p>
                            <h1 className="text-5xl font-bold">Hello,<br/>
                            I am Rafaul Goni Ansari.</h1>
                            <p className="py-6">I am studying Philosophy in a National University in Bangladesh.</p>
                            <p className="py-6">But I feel more interested in programming. So I started to learn different technologies related to programming. For the last 1 year I learned and explored different programming languages and now I decided to make my career in the web development field. I learned JavaScript, React.js and next.js in the last few months and also I learned Node.js, Express.js and MongoDB for the backend. I also have experience with Firebase. Though I do not have any job experience but recently I contributed to a team project and made a beautiful job hiring website.</p>
                            <Link to="https://www.linkedin.com/in/rafaul-goni-ansari" className="font-bold btn bg-[#1791c8] flex items-center space-x-2">Read more <span className="pl-2"><FaArrowRight/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;