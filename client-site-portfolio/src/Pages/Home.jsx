import About from "../Components/HomeAllFile/About";
import AllTimeRound from "../Components/HomeAllFile/AllTimeRound";
import Banner from "../Components/HomeAllFile/Banner";
import Contact from "../Components/HomeAllFile/Contact";
import Skill from "../Components/Skill/Skill";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <div className="mt-14">
                <div>
                    <div className='border-l-4 border-[#1791c8] mb-4'>
                        <div className='ml-2 space-y-2'>
                            <p className='text-[#1791c8] font-bold'>Skills</p>
                            <h1 className='text-4xl font-bold'>Why Choose me</h1>
                            <p className='max-w-[600px]'>I am like water, adaptable to any shape or need, flowing effortlessly to fit any container I find myself in.</p>
                        </div>
                    </div>
                </div>
                <Skill />
            </div>
            <AllTimeRound/>
            <About/>
            <Contact />
        </div>
    );
};

export default Home;