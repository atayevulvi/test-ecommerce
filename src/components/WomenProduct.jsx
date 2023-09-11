/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { addToWish } from '../redux/wishlistSlice';
const WomenProduct = ({ item }) => {
  const dispatch = useDispatch()
  const iconStyle = 'h-[40px] w-[40px] rounded-full flex items-center justify-center bg-white text-lg m-2 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100'
  const [hovereffect, setHoverEffect] = useState('opacity-0')

  const HandlHoverEnter = () => {
    setHoverEffect('opacity-1 bg-[rgba(0,0,0,0.2)]')
  }
  const HandlHoverExit = () => {
    setHoverEffect('opacity-0')
  }
  return (
    <div className='flex flex-col flex-1 border-4 items-center justify-center min-w-[300px] min-h-[250px] overflow-hidden rounded-md  m-2 relative' onMouseEnter={HandlHoverEnter} onMouseLeave={HandlHoverExit}>
      <img className='w-60  h-72 hover:scale-[0.90]' src={item.image} alt="product_image" />
      <h1 className="text-[15px] text-blue-700">{item.title}</h1>
      <p className="text-[18px] text-red-500">{item.price}</p>
      <p className="text-[16px] text-lime-800">{item.brand}</p>
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ` + hovereffect}>
        <div className={iconStyle}>
          <AiOutlineShoppingCart onClick={() => dispatch(addToCart(item))} />
        </div>
        <div className={iconStyle}>
          <AiFillHeart onClick={() => dispatch(addToWish(item))} />
        </div>
        <div className={iconStyle}>
          <GoSearch />
        </div>
      </div>
    </div>
  )
}

export default WomenProduct
