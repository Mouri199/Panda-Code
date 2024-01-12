

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0B0C22] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h5 className="font-bold text-lg mb-4">Office</h5>
                            <p>Germany —</p>
                            <p>785 15h Street, Office 478</p>
                            <p>Berlin, De 81566</p>
                            <p className="mt-4">info@email.com</p>
                            <p>+1 840 841 25 69</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4">Links</h5>
                            <ul>
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Services</li>
                                <li className="mb-2">About Us</li>
                                <li className="mb-2">Our Team</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4">Socials</h5>
                            <ul>
                                <li className="mb-2">Facebook</li>
                                <li className="mb-2">Twitter</li>
                                <li className="mb-2">Dribble</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4">Newsletter</h5>
                            <div className="flex flex-col space-y-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter Your Email Address"
                                    type="email"
                                />
                                <div className="flex items-center space-x-2">
                                    <button
                                        type="button"
                                        role="checkbox"
                                        aria-checked="false"
                                        data-state="unchecked"
                                        value="on"
                                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                        id="privacy-policy"
                                    ></button>
                                    <input
                                        aria-hidden="true"

                                        type="checkbox"
                                        value="on"

                                    />
                                    <label className="text-sm">
                                        I agree to the Privacy Policy.
                                    </label>
                                </div>
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 self-start bg-[#bd1e59] text-white">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>Futuredesks Services© 2024. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;