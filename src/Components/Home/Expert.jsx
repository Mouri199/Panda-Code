import { Line } from 'rc-progress';
import banner from '/image-2-copyright.svg'

const Expert = () => {
    return (
        <div>
            <div className="bg-[#F7F8FC]">
                <div className='lg:flex justify-around items-center'>
                    <div>
                        <img className='w-[600px]' src={banner} alt="" />
                    </div>
                    <div className='lg:mx-0 mx-5 text-black'>
                        <p className='lg:text-lg'>WHO WE ARE</p>
                        <h1 className='lg:text-4xl text-2xl mb-4 font-bold'>Our Experts are Ready to Help</h1>
                        <p> This collaborative phrase emphasizes teamwork and inspires creative collaboration.</p>
                        <div className='flex gap-10 mt-5'>
                            <div>
                                <p >Total Projects</p>
                                <h1 className='lg:text-4xl text-xl font-semibold'>400+</h1>
                            </div>
                            <div>
                                <p >Team</p>
                                <h1 className='lg:text-4xl text-xl font-semibold'>12+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f7f8fc] px-8 py-12">
                    <div className="max-w-3xl mx-auto text-center text-black">
                        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">We Develop & Create Digital Future</h2>
                        <p className="text-gray-500 mb-8">partnerships@futuredesks.in</p>
                        <div className="space-y-4">
                            <div>
                                <div className="text-lg flex justify-between font-semibold text-gray-800">
                                    <p>Web Design</p>
                                    <p>100%</p>
                                </div>
                                <div >
                                    <Line percent={100} strokeWidth={2.5} strokeColor="#FF2E57" />

                                </div>
                            </div>
                            <div>
                                <div className="text-lg flex justify-between font-semibold text-gray-800">
                                    <p>Branding</p>
                                    <p>100%</p>
                                </div>
                                <div>
                                    <Line percent={100} strokeWidth={2.5} strokeColor="#FF2E57" />
                                </div>
                            </div>
                            <div>
                                <div className="text-lg flex justify-between font-semibold text-gray-800">
                                    <p>Design</p>
                                    <p>100%</p>
                                </div>
                                <div>
                                    <Line percent={100} strokeWidth={2.5} strokeColor="#FF2E57" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;