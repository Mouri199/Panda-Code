import { Link, NavLink } from 'react-router-dom';
import logo from '/logo-1.png'
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    return (
       
        
       
        <div className='overflow-hidden'>
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
                                    <NavLink className='text-xl hover:text-[#0062FF] hover:underline' to='/'>Home</NavLink>
                                    <NavLink className='text-xl hover:text-[#0062FF] hover:underline' to='/internship'>Internship</NavLink>
                                    <details className="dropdown">
                                        <summary className="text-xl">Tutorial</summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                            <Link to='/html'><a>C++</a></Link>
                                            <Link to='/html'><a>Python</a></Link>
                                            <Link to='/html'><a>JAVA</a></Link>
                                            <Link to='/html'><a>HTML</a></Link>
                                            <Link to='/html'><a>CSS</a></Link>
                                            <Link to='/html'><a>JAVASCRIPT</a></Link>
                                            <Link to='/html'><a>PHP</a></Link>
                                            <Link to='/html'><a>MongoDB</a></Link>
                                        </ul>
                                    </details>

                                    <NavLink className='text-xl hover:text-[#0062FF] hover:underline' to='/courses'>Courses</NavLink>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className='h-[70px]' src={logo} alt="" />
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu gap-5 font-medium menu-horizontal">
                                {/* Navbar menu content here */}
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Home</div>
                                    <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Pages</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Protfolio</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Blog</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#F9FAFF] text-lg hover:underline m-1">Contacts</div>

                                </div>




                            </ul>

                        </div>
                        <div>
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
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