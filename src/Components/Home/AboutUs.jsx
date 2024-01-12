import logo1 from '/aim-small.svg'
import logo2 from '/analytics-small.svg'
import logo3 from '/app-410x230.png'
import logo4 from '/logo-design-410x230.png'
import logo5 from '/illustration-410x230.png'
import logo7 from '/compliant-410x230.png'


const AboutUs = () => {
    return (
        <div>
            <div className="bg-[#F7F8FC] py-12">
                <div className="lg:mx-48 px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">What We Offer!!</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-4 bg-gray-200">
                                <img src={logo1} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Website</h3>
                            <p className="text-gray-600">Craft an online fortress that <br /> converts every click.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-5 bg-gray-200">
                                <img className='w-[50px] h-[50px]' src={logo3} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">App Development</h3>
                            <p className="text-gray-600">Your brand deserves a face <br /> it can be proud of.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-5 bg-gray-200">
                        <img className='h-[50px] w-[50px]' src={logo4} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Logo Design</h3>
                            <p className="text-gray-600">Visual storytelling that <br /> captivates, informs, and inspires.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-4 bg-gray-200">
                               <img src={logo1} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">SMMA</h3>
                            <p className="text-gray-600">Don't just post, dominate <br /> the social sphere.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-6 bg-gray-200">
                              <img className='w-[50px] h-[50px]' src={logo5} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Graphic Design</h3>
                            <p className="text-gray-600">From strategy to success, we <br /> orchestrate campaigns that drive results.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-4 bg-gray-200">
                              <img src={logo2} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Marketing</h3>
                            <p className="text-gray-600">From strategy to success, we <br /> orchestrate campaigns that drive results.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full p-5 bg-gray-200">
                               <img className='w-[50px] h-[50px]' src={logo7} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <p className="text-gray-600">Navigate the legal landscape <br /> with confidence.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#FF2E57] hover:bg-[#FF2E57] text-white">
                            More Features
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;