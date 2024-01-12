import AboutUs from './AboutUs'
import Award from './Award'
import Expert from './Expert'
import Package from './Package'
import Review from './Review'
import Services from './Services'
import banner from '/image-1-copyright.svg'

import brand1 from '/partner-1-copyright.png'
import brand2 from '/partner-2-copyright.png'
import brand3 from '/partner-3-copyright.png'
import brand4 from '/partner-4-copyright.png'
import brand5 from '/partner-5-copyright.png'
import brand6 from '/partner-6-copyright.png'
// import whatsapp from './icons8-whatsapp.svg'



const Home = () => {
    return (
        <div>
            <header className="flex flex-col lg:flex-row items-center justify-between  p-5 lg:px-48 gap-10 bg-[#f8f9fd]">
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-black">Right Platform For Your Brand</h1>
                    <p className="text-black">
                        We craft impactful strategies, stunning visuals, and rock-solid legal foundations to take your online
                        presence to the next level.
                    </p>
                    <div className="flex space-x-4">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#3D238C] h-10 px-4 py-2 bg-[#0C0367] text-white">
                            View More
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">
                            About Us
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={banner}
                        alt="Hero Image"
                        className="max-w-xs md:max-w-lg lg:max-w-full"
                        width="500"
                        height="300"
                    // style="aspect-ratio: 500 / 300; object-fit: cover;"
                    />
                </div>
            </header>
            <div className="grid lg:grid-cols-6 md:grid-cols-6 bg-[#F7F8FC] grid-cols-2 lg:px-48 justify-center space-x-4 p-5">
                <img
                    src={brand1}
                    alt="Brand Logo 1"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
                <img
                    src={brand2}
                    alt="Brand Logo 2"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
                <img
                    src={brand3}
                    alt="Brand Logo 3"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
                <img
                    src={brand4}
                    alt="Brand Logo 4"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
                <img
                    src={brand5}
                    alt="Brand Logo 10"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
                <img
                    src={brand6}
                    alt="Brand Logo 10"
                    className="h-20 w-32"
                    width="100"
                    height="20"
                // style="aspect-ratio: 100 / 20; object-fit: cover;"
                />
            </div>
            <div className="fixed bottom-5 right-5 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                </svg>
              
            </div>

            <AboutUs></AboutUs>
            <Expert></Expert>
            <Award></Award>
            <Package></Package>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;