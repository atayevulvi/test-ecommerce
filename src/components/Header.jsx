/* eslint-disable no-unused-vars */
import { FaShoppingCart } from 'react-icons/fa';
import SVG from '../assets/mark.svg';
import { NavLink } from 'react-router-dom';
import Women from '../pages/Women';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Kids from '../pages/Kids';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImHeart } from 'react-icons/im';
import Products from '../pages/Products'

const Header = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    return (
        <>
            <div id='top-bar' className="header-up shadow-md bg-black h-12 ">
                <div className="container-xxl px-8 mx-auto flex justify-between items-center">
                    <div className="flex items-center mt-2">
                        <h1 className="text-white text-lg">Welcome to shopping</h1>
                    </div>
                    <div className="text-white flex mt-2 text-lg">
                        <div>
                            <p>Sign in</p>
                        </div>
                        <div className="ml-8">
                            <p>Create an account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-under  sticky top-0 z z-50 opacity-100 shadow-md h-16 bg-[#414242] cursor-pointer">
                <div className="container-xxl px-8 mx-auto flex justify-between items-center">
                    <div className='mt-3 flex justify-between w-[100%] text-white'>
                        <div className='w-12'>
                            <img className='lg:flex md:hidden' src={SVG} alt="" />
                        </div>
                        <div className='flex lg:w-[40%] md:w-[70%] lg:-translate-x-0 md:-translate-x-10 justify-evenly mt-2 '>
                            <div>
                                <NavLink to='/home' element={<Home />}>Home</NavLink>
                            </div>
                            <div>
                                <NavLink to="/women" element={<Women />}>Women</NavLink>
                            </div>
                            <div>
                                <NavLink to="/men" element={<Men />}>Men</NavLink>
                            </div>
                            <div>
                                <NavLink to='/kids' element={<Kids/>}>Kids</NavLink>
                            </div>
                            <div>
                                <NavLink to='/products' element={<Products/>}>Products</NavLink>
                            </div>
                        </div>
                        <div className='flex items-center lg:w-[28%] justify-between text-lg '>
                            <div className='lg:flex items-center justify-around  md:hidden bg-white lg:-translate-x-20 md:-translate-x-0'>
                                <input type="text" placeholder='Search' className='w-[90%] outline-none pl-3 pr-3 h-10 text-black'/>
                                <button className='text-white outline-none bg-blue-500 w-[30%] h-10 text-[17px] p-3 flex items-center'>search</button>
                            </div>
                            <div className='flex group'> 
                                <div className='flex items-center justify-center' onClick={() => navigate('/cart')}>
                                    <FaShoppingCart className='group-hover:scale-[1.1 group-hover:text-blue-600 text-[40px]'  id='cartIcon' />
                                    <p className='ml-2 lg:-translate-x-7 group-hover:text-white lg:-translate-y-1 md:-translate-x-7 md:-translate-y-1  text-[15px] text-black'>{cart.length || 0}</p>
                                </div>
                                <div className='flex items-center justify-center ' onClick={() => navigate('/wishlist')}>
                                    <ImHeart className='group-hover:scale-[1.1] group-hover:text-red-600 text-[35px]'  id='cartIcon' />
                                    <p className='ml-2  lg:-translate-x-7 group-hover:text-white lg:-translate-y-0 md:-translate-x-7 md:-translate-y-0 text-black text-[15px]'>{wishlist.length || 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
