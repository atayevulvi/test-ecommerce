/* eslint-disable react/prop-types */
import { removeItem } from '../redux/wishlistSlice'
import { useDispatch } from 'react-redux'



function WishItem({ id, image, title, price, brand }) {
    console.log(image);
    const dispatch = useDispatch()
    return (
        <>
            <div className="wishItem my-1 ">
                <img className=' w-32 hover:scale-[1.1]' src={image} alt="" />
                <div>
                    <p>{title}</p>
                    <p>{brand}</p>
                </div>
                <div>
                    <p className="cartItem__price">
                        <small className='text-orange-500'>$</small>
                        <strong className='text-orange-400'>{price}</strong>
                    </p>
                </div>
                <button
                    className='cartItem__removeButton'
                    onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
        </>
    )
}

export default WishItem
