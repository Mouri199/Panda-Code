import banner from '/image-3-copyright.svg'

const Services = () => {
    return (
        <div>
            <div className='lg:flex justify-around items-center bg-[#f8f9fd]'>

                <div className='lg:mx-0 mx-5'>
                    <p className='text-xl'>WHAT WE DO</p>
                    <h1 className='lg:text-5xl mb-4 font-semibold'>We Provide Best <br /> Digital Services</h1>
                    <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut odit aut fugit sed quia.</p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#A494FF] h-10 px-4 py-2 bg-[#8F6DFF] text-white">Discover Now</button>
                </div>
                <div>
                    <img className='w-[600px]' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;