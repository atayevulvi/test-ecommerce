/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { addToWish } from '../redux/wishlistSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const KidsProduct = ({ item }) => {
  const notify = () => {
    toast('🦄 Səbətə uğurla əlavə olundu!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const handleCartClick = () => {
    dispatch(addToCart(item));
    notify();
  }
  const dispatch = useDispatch();
  const iconStyle = 'h-[40px] w-[40px] rounded-full flex items-center justify-center bg-white text-lg m-2 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100';
  const [hovereffect, setHoverEffect] = useState('opacity-0');
  const [isWishClicked, setIsWishClicked] = useState(false);

  const HandlHoverEnter = () => {
    setHoverEffect('opacity-1 bg-[rgba(0,0,0,0.2)]');
  }

  const HandlHoverExit = () => {
    setHoverEffect('opacity-0');
  }

  const handleWishClick = () => {
    dispatch(addToWish(item));
    setIsWishClicked(!isWishClicked);
  }

  return (
    <div className='flex bg-black p-3 flex-col flex-1 border-4 items-center justify-center min-w-[300px] min-h-[250px] overflow-hidden rounded-md  m-2 relative' onMouseEnter={HandlHoverEnter} onMouseLeave={HandlHoverExit}>
      <img className='w-60  h-72 hover:scale-[0.90]' src={item.image} alt="product_image" />
      <h1 className="text-[15px] text-blue-700">{item.title}</h1>
      <p className="text-[18px] text-red-500">{item.price}</p>
      <p className="text-[16px] text-lime-800">{item.brand}</p>
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ` + hovereffect}>
      <div className={iconStyle}>
      <div onClick={handleCartClick}>
        <ToastContainer />
        <AiOutlineShoppingCart />
      </div>
    </div>
        <div className={iconStyle}>
          <div onClick={handleWishClick} style={{ color: isWishClicked ? 'red' : 'blue' }}>
            <AiFillHeart />
          </div>
        </div>
        <div className={iconStyle}>
          <GoSearch />
        </div>
      </div>
    </div>
  );
}

export default KidsProduct;
