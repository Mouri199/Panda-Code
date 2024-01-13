import { Link, NavLink } from 'react-router-dom';
import logo from '/logo-1.png'
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    return (



        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#F9FAFF]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="drawer drawer-start lg:block hidden">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className='flex items-center'>
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost text-2xl"> <FiMenu /></label>
                                </div>
                                <div>
                                    <img className='h-[70px]' src={logo} alt="" />
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <div>
                                        <img className='h-[70px]' src={logo} alt="" />
                                    </div>
                                    <div className='flex flex-col p-10 pt-[200px] gap-5'>
                                        <a className='text-xl hover:text-[#0062FF] hover:underline' to='/'>Facebook</a>
                                        <a className='text-xl hover:text-[#0062FF] hover:underline' to='/'>Twitter</a>
                                        <a className='text-xl hover:text-[#0062FF] hover:underline' to='/'>Dribble</a>
                                        <a className='text-xl hover:text-[#0062FF] hover:underline pb-72' to='/'>Instagram</a>
                                    </div>
                                    <hr />
                                    <div>
                                        <h1 className='text-2xl font-bold'> +1 840 9841 25 69</h1>
                                        <p className='pt-2'>info@gmail.com</p>
                                    </div>

                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className='h-[70px]' src={logo} alt="" />
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu gap-5 font-medium menu-horizontal">
                                {/* Navbar menu content here */}
                                <div className="dropdown dropdown-hover ">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1 ">Home</div>
                                    <ul tabIndex={0} className=" dropdown-content  menu p-2 shadow bg-[#0B0C22] text-white rounded-box w-52">
                                        <li><a>Marketing Agency</a></li>
                                        <li><a>Creative Agency</a></li>
                                        <li><a>Advertising Agency</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Blog</div>

                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#0B0C22] text-white rounded-box w-[600px]">
                                        <div className='flex gap-5'>
                                            <div>
                                                <li className='text-2xl font-semibold'><a>Blog Style 1</a></li>
                                                <li><a>Blog Standard</a></li>
                                                <li><a>Blog List</a></li>
                                                <li><a>Masonry 2 Columns</a></li>
                                                <li><a>Masonry 3 Columns</a></li>
                                                <li><a>Masonry 4 Columns</a></li>
                                            </div>
                                            <div>
                                                <li className='text-2xl font-semibold'><a>Blog Style 2</a></li>
                                                <li><a>Blog Grid 3 Columns</a></li>
                                                <li><a>Blog Grid 4 Columns</a></li>
                                                <li><a>Blog Protfolio 3 Columns</a></li>
                                                <li><a>Blog Protfolio 4 Columns</a></li>

                                            </div>
                                            <div>
                                                <li className='text-2xl font-semibold'><a>Single Post</a></li>
                                                <li><a>Style 1</a></li>
                                                <li><a>Style 2</a></li>
                                                <li><a>Style 3</a></li>
                                                <li><a>Video Post</a></li>
                                                <li><a>Audio Post</a></li>
                                                <li><a>With Sidebar</a></li>

                                            </div>
                                        </div>
                                    </ul>

                                </div>
                                <div className="dropdown dropdown-hover ">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Pages</div>
                                    <ul tabIndex={0} className=" dropdown-content  menu p-2 shadow bg-[#0B0C22] text-white rounded-box w-52">
                                        <li><a>About</a></li>
                                        <li><a>Services</a></li>
                                        <li><a>Our Team</a></li>
                                        <li><a>FAQ</a></li>
                                        <li><a>Pricing</a></li>
                                        <li><a>Typography</a></li>
                                        <li><a>Shortcodes</a></li>
                                        <li><a>404</a></li>
                                        <li><a>Privacy Policy</a></li>
                                        <li><a>Service Plus</a></li>
                                        <li><a>Newsletter Popup</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Protfolio</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#0B0C22] text-white rounded-box w-52">
                                        <li><a>Protfolio 1</a></li>
                                        <li><a>Protfolio 2</a></li>
                                        <li><a>Protfolio 3</a></li>
                                        <li><a>Protfolio 4</a></li>
                                        <li><a>Protfolio 5</a></li>
                                        <li><a>Protfolio 6</a></li>
                                        <li><a>SingleProtfolio</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Contacts</div>

                                </div>




                            </ul>

                        </div>
                        <div>


                            <div className="dropdown dropdown-top dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">
                                    {/* <button className="btn btn-ghost btn-circle"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>

                            </div>

                        </div>
                        <button className='px-10 btn py-2 bg-[#FF2E57] hover:bg-[#FF2E57] text-xl font-bold rounded-full text-white flex items-center'>
                            Let's Talk
                        </button>

                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Home</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Protfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;