import Lottie from "lottie-react";
import webdata from './Animation - 1706336154289.json'
import android from './Animation - 1706336208995.json'
import data from './Animation - 1706336258053.json'
import java from './Animation - 1706337491768.json'
import uiUx from './Animation - 1706337611007.json'


const InternServices = () => {
    return (
        <div className="bg-[#F8F9FD]">
            <h1 className="lg:text-4xl text-xl text-center font-bold py-4">  We Provide All Exclusive services For Clients </h1>
            <p className="text-center"> We are passionate about technology and believe in the power of <br /> software to transform the world. Our internship  program is just <br />  one of the ways in which we are investing in the future of the industry.</p>

            <div className="lg:flex gap-10 lg:mx-[400px] items-center pt-10">
                <div>
                    <Lottie className="lg:w-[400px]" animationData={webdata}></Lottie>
                </div>
                <div className="mx-5">
                    <h1 className="text-3xl font-bold">Web Development </h1>
                    <p className="my-3">web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                        Apply Now
                    </button>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse gap-10 lg:mx-[400px] items-center">

                <div className="mx-5">
                    <h1 className="text-3xl font-bold">Android Development </h1>
                    <p className="my-3">Android, the user-friendly open-source operating system, has transformed the way we access internet applications and carry out important tasks on our mobile devices. At CODSOFT, we understand the growing preference for mobile usage and offer the ideal starting point for your app development journey. Discover the simplicity of creating your first app with us and unlock a world of endless possibilities in the realm of mobile innovation.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                        Apply Now
                    </button>
                </div>
                <div>
                    <Lottie className="lg:w-[600px]" animationData={android}></Lottie>
                </div>
            </div>
            <div className="lg:flex gap-10 lg:mx-[400px] items-center">
                <div>
                    <Lottie className="lg:w-[400px]" animationData={data}></Lottie>
                </div>
                <div className="mx-5">
                    <h1 className="text-3xl font-bold">Data Science </h1>
                    <p className="my-3">Remote Data Science Internships Are A Unique Chance To Gain Experience In The Midst Of The Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Data Analysis Internships Are Some Of The Most Competitive And Popular Within The Broader Data Science Field.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                        Apply Now
                    </button>
                </div>

            </div>
            <div className="flex lg:flex-row flex-col-reverse gap-10 lg:mx-[400px] items-center">

                <div className="mx-5">
                    <h1 className="text-3xl font-bold">Java Programming </h1>
                    <p className="my-3">Become a Java programming master from the convenience of your own home and unlock incredible job prospects with our certification program. Join our comprehensive 4-week internship program, where you'll learn everything from web application development to deployment using Java Build a solid foundation for your career with hands-on training and real-world application in a supportive and collaborative environment.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                        Apply Now
                    </button>
                </div>

                <div>
                    <Lottie className="lg:w-[400px]" animationData={java}></Lottie>
                </div>

            </div>
            <div className="lg:flex gap-10 lg:mx-[400px] items-center">
                <div>
                    <Lottie className="lg:w-[500px]" animationData={uiUx}></Lottie>
                </div>

                <div className="mx-5">
                    <h1 className="text-3xl font-bold">UI/UX Design </h1>
                    <p className="my-3">Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                        Apply Now
                    </button>
                </div>



            </div>
        </div>
    );
};

export default InternServices;