import { PackageData } from "../../assets/Data/PackageData";


const Package = () => {
    return (
        <div className="bg-[#F7F8FC]">
            <div className="text-center pt-10">
                <p className="text-xl mb-5">OUR PRICE TABLE</p>
                <h1 className="text-4xl font-semibold mb-3">Choose the Best Package</h1>
                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim.</p>
            </div>
            <div className="lg:flex mx-5 lg:space-y-0 space-y-5  justify-around lg:mx-48 mt-10 pb-10">
                {
                    PackageData?.map((data) => (
                        <div key={data.title}>
                            <div className="card text-center w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="text-center lg:text-xl font-medium">{data.title}</h2>
                                    <p className="lg:text-4xl font-semibold">${data.price}.00</p>
                                    <p>Per/month</p>
                                    <p className="text-xl font-medium">{data.downloads} Downloads</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Package;