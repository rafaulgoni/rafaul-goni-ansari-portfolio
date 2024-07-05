import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { ImGithub, ImLinkedin, ImFacebook } from "react-icons/im";


const Banner = () => {

    return (
        <div className="">
            <div className="hero bg-base-200 min-h-[600px]">
                <div className="hero-content flex-col lg:flex-row-reverse md:pt-0 pt-20">
                    <img
                        src={"https://i.ibb.co/9rBwqdL/rafaul.jpg"}
                        className="md:max-w-sm w-auto rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Hey, <br />Rafaul Goni Ansari is here</h1>
                        <h1 style={{ margin: 'auto 0', fontWeight: '700' }}>
                            {' '}
                            <span style={{ color: 'rgb(2 132 199)', fontWeight: 'bold',fontSize: '3rem' }}>
                                <Typewriter
                                    words={['I am junior web developer']}
                                    loop={500}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="py-6">
                            As a Junior Developer, I am passionate about web development and eager to contribute my skills in various programming languages. I am committed to learning and growing, and I aim to deliver high-quality code and innovative solutions.
                        </p>
                        <Link to="https://docs.google.com/document/d/1njO4qlDmnD_IUckrPcPRLkIzp3liVpqKKxoJFTDEN2g/edit?usp=sharing" className="btn bg-[#1791c8] mr-2 text-white"><FaDownload /> Resume</Link>
                        <Link to="https://www.linkedin.com/in/rafaul-goni-ansari" className="btn border border-black"><IoCall /> Contact</Link>
                        <div className="pt-2 space-x-3 md:pl-10">
                            <Link to="https://github.com/rafaulgoni"> <button className="border-2 border-[#1791c8] rounded-full p-2"><ImGithub className="text-2xl"/></button></Link>
                            <Link to="https://www.linkedin.com/in/rafaul-goni-ansari/"> <button className="border-2 border-[#1791c8] rounded-full p-2"><ImLinkedin className="text-2xl"/></button></Link>
                            <Link to="https://www.facebook.com/rafaulGoniAnsari1"> <button className="border-2 border-[#1791c8] rounded-full p-2"><ImFacebook className="text-2xl"/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;