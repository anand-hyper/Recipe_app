import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { IoAddCircleOutline } from 'react-icons/io5'
import { RiMenuLine } from 'react-icons/ri'
import { RiCloseFill } from 'react-icons/ri'
import { IoMdArrowDropdown } from 'react-icons/io'
import avatar from '../assets/avatar.png';

const Navbar = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    function handleNav() {
        setNav(!nav);
    }
    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("username");
        navigate("/login");
    }

    const avatarname = window.localStorage.getItem("username");

    return (
        <>
            <div className='w-full h-16 glassmorphism fixed top-0 z-50 shadow-sm'>
                <div className='w-full h-full flex items-center justify-between px-10 font-semibold'>
                    <Link to='/'><div className='sm:text-2xl text-xl sm:font-extrabold font-bold'>Find<span className='text-red-500'>Recipes</span></div></Link>
                    <div className='lg:flex hidden'>
                        <ul className='flex items-center justify-center'>
                            <li className=' mx-4 flex items-center justify-center cursor-pointer text-black hover:text-red-500' onClick={() => navigate('/favorites')}>
                                <div className='mx-1'><AiOutlineHeart size={20} /></div>
                                <div><p>Favourites</p></div>
                            </li>
                            <Link to='/createrecipes'>
                                <li className=' mx-4 flex items-center justify-center cursor-pointer text-black hover:text-red-500'>
                                    <div className='mx-1'><IoAddCircleOutline size={20} /></div>
                                    <div><p>Add recipes</p></div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className='lg:flex hidden'>
                        {!cookies.access_token ? (
                            <Link to='/login'><button className='bg-black rounded-full py-2 px-8 text-white hover:bg-red-500 duration-150 flex items-center justify-center'><div>Login</div></button></Link>
                        ) : (
                            <div>
                                <div className='dropdown'>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <img src={avatar} alt={avatarname} className="w-[40px] h-[40px]" />
                                        </div>
                                        <div>
                                            <IoMdArrowDropdown fontSize={20} />
                                        </div>
                                    </div>
                                    <div className='dropdown-content shadow-sm bg-white rounded-lg py-5 px-3'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <div className=''>
                                                {/* <PersonIcon fontSize='24'/> */}
                                                <p className='font-semibold'>{avatarname}</p>
                                            </div>
                                            <div>
                                                <button onClick={logout} className='bg-black text-white px-6 py-2 rounded-full mt-3'>Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onClick={handleNav} className="lg:hidden flex">
                        <RiMenuLine fontSize={24} />
                    </div>
                </div>
                <div className={nav ? 'w-full h-screen bg-black opacity-90 absolute top-0 left-0 z-30 duration-75 ease-in ' : 'w-full h-screen bg-black opacity-90 absolute top-0 left-[-9999px] z-30 duration-75 ease-in'}></div>
                <div className={nav ? 'w-60 h-screen bg-white absolute z-50 top-0 left-0 duration-75 ease-in px-5' : 'w-60 h-screen bg-white absolute z-50 top-0 left-[-9999px] duration-75 ease-in px-5'}>
                    <div className='w-full flex items-center justify-between mt-5'>
                        <Link to='/'>
                            <div className='text-xl font-bold'>Find<span className='text-red-500'>Recipes</span></div>
                        </Link>
                        <div onClick={handleNav}>
                            <RiCloseFill fontSize={24} />
                        </div>
                    </div>
                    <div className='mt-16'>
                        <ul className='font-semibold'>
                            {cookies.access_token ? (
                                <li>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img src={avatar} alt={avatarname} className="w-[40px] h-[40px]" />
                                        </div>
                                        <div>
                                            <p className='underline mt-1'>{avatarname}</p>
                                        </div>
                                    </div>
                                </li>
                            ) : (null)}
                            <Link to='/favorites'>
                                <li className='cursor-pointer mt-10 flex items-center gap-2'>
                                    <div className='mx-1'><AiOutlineHeart size={20} /></div>
                                    <div><p>Favourites</p></div>
                                </li></Link>
                            <Link to='/createrecipes'>
                                <li className=' cursor-pointer mt-3 flex items-center gap-2'>
                                    <div className='mx-1'><IoAddCircleOutline size={20} /></div>
                                    <div><p>Add recipes</p></div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        {!cookies.access_token ? (
                            <Link to='/login'><button className=' rounded-full py-2 px-16 text-white bg-black duration-150 flex items-center justify-center font-medium'><div>Login</div></button></Link>
                        ) : (
                            <div>
                                <button onClick={logout} className=' rounded-full py-2 px-16 text-white bg-black duration-150 flex items-center justify-center font-medium'><div>Logout</div></button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar