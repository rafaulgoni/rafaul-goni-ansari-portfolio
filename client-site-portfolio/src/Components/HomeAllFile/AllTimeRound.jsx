import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const AllTimeRound = () => {
    return (
        <div className="mt-10">
            <Marquee>
                <div className="flex items-center space-x-10">
                    <img className="w-16" src={"https://i.ibb.co/s30SXTs/html11.webp"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/xMGLfZf/bie-supply-9.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/TYgHg9m/javascript-logo-big.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/qdw2gtg/R.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/xDN6S8G/next-js-logo-7929-BCD36-F-seeklogo-com.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/pwHSYPC/Node-js-Logo-wine.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/3WSzkQB/node-js-express.jpg"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/qFLnC4H/mongodb.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/58FFngJ/git.png"} alt="" />
                    <img className="w-16" src={"https://i.ibb.co/C7qfkGk/OIP.jpg"} alt="" />
                </div>
            </Marquee>
            <div className="text-center mt-5">
            <Link to="https://docs.google.com/document/d/1njO4qlDmnD_IUckrPcPRLkIzp3liVpqKKxoJFTDEN2g/edit?usp=sharing" className="btn bg-[#1791c8] mr-2 text-white"><FaDownload /> Resume</Link>
            </div>
        </div>
    );
};

export default AllTimeRound;