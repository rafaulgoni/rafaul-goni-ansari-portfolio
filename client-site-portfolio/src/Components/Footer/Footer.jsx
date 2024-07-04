import { FaSquareGithub } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y bg-base-200 dark:text-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                            <img className="min-w-40" src={'https://i.ibb.co/D1Nb0p6/Screenshot-from-2024-07-03-08-25-53-removebg-preview.png'} alt="" />
                            </div>
                            <span className="self-center text-3xl font-bold text-black pl-2 ">Rafa{"'"}s <samp className="text-[#1791c8]">Portfolio</samp></span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-900 font-bold">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase dark:text-gray-900 font-bold">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <Link to="https://www.facebook.com/rafaulGoniAnsari1?mibextid=ZbWKwL" title="Facebook" className="flex items-center p-1">
                                    <ImFacebook2 className="text-xl"/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/rafaul-goni-ansari" title="LinkedIn" className="flex items-center p-1">
                                    <ImLinkedin className="text-xl"/>
                                </Link>
                                <Link to="https://github.com/rafaulgoni" title="Github" className="flex items-center p-1">
                                    <FaSquareGithub className="text-xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 Company Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;