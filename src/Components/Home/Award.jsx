

const Award = () => {
    return (
        <div>
            <div className="bg-[#0F172A] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Huge Honor</p>
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Awards</h2>
                        <div className="mt-8 flex justify-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-indigo-500" />
                            <div className="h-2 w-2 rounded-full bg-indigo-500" />
                            <div className="h-2 w-2 rounded-full bg-indigo-500" />
                            <div className="h-2 w-2 rounded-full bg-indigo-500" />
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="pt-6">
                            <div className="flow-root bg-[#1E293B] rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Search Strategy</h3>
                                    <p className="mt-5 text-base text-gray-300">Consectetur adipiscing elit, sed do eiusmod tempo</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-[#1E293B] rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Digital Marketing</h3>
                                    <p className="mt-5 text-base text-gray-300">Consectetur adipiscing elit, sed do eiusmod tempo</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-[#1E293B] rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Unique Methods</h3>
                                    <p className="mt-5 text-base text-gray-300">Consectetur adipiscing elit, sed do eiusmod tempo</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-[#1E293B] rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Link & Content</h3>
                                    <p className="mt-5 text-base text-gray-300">Consectetur adipiscing elit, sed do eiusmod tempo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;