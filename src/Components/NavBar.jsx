
import logo from '/logo-1.png'
import { FiMenu } from "react-icons/fi";
import React from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [isOpened, setIsOpened] = React.useState(false)
    const toggleLeftDrawer = () => {
        setIsOpened((prevState) => !prevState)
    }




    return (



        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#F9FAFF]">
                        <div className="flex-none hidden">
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
                                    <NavLink to='/' tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1 ">Home</NavLink>
                                    <ul tabIndex={0} className=" dropdown-content  menu p-2 shadow bg-[#2E1D66] text-white rounded-box w-52">
                                        <li><a>Marketing Agency</a></li>
                                        <li><a>Creative Agency</a></li>
                                        <li><a>Advertising Agency</a></li>
                                    </ul>
                                </div>


                                <div className="dropdown dropdown-hover">
                                    <NavLink to='/intern' tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Internships</NavLink>

                                </div>

                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Blog</div>

                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#2E1D66] text-white rounded-box w-[600px]">
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
                                    <ul tabIndex={0} className=" dropdown-content  menu p-2 shadow bg-[#2E1D66] text-white rounded-box w-52">
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
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#2E1D66] text-white rounded-box w-52">
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





                        <div >
                            <button className="button bg-[#F8F9FD] btn btn-ghost text-2xl text-black" onClick={toggleDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='top'
                                className='bla bla bla'
                            >
                                <div className="mb-6 flex  items-center justify-between">
                                    <h1 className='text-white -mt-40 text-5xl font-semibold'>Panda</h1>
                                    <fieldset className="w-full -ml-32 space-y-1">
                                        <label className="hidden">Search</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
                                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                                    </svg>
                                                </button>
                                            </span>
                                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                                        </div>
                                    </fieldset>

                                </div>

                            </Drawer>

                        </div>

                        <div className='lg:hidden'>
                            <button onClick={toggleLeftDrawer}> <FiMenu /></button>

                            <Drawer
                                open={isOpened}
                                onClose={toggleLeftDrawer}
                                direction='left'
                                className='bla bla bla'
                            >
                                <div className="mb-6 flex  items-center justify-between">
                                    <ul className="menu p-4 w-80 min-h-full">

                                        <li><a>Home</a></li>
                                        <li><a>Pages</a></li>
                                        <li><a>Protfolio</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>

                                </div>

                            </Drawer>

                        </div>




                        <button className='px-8 btn py-2 bg-[#FF2E57] hover:bg-[#FF2E57] text-xl font-bold lg:block hidden  text-white items-center'>
                            Let's Talk
                        </button>


                    </div>


                </div>


            </div>
        </div >
    );
};

export default NavBar;