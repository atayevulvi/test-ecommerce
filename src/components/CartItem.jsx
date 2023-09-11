/* eslint-disable react/prop-types */
import './cartItem.css'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
function CartItem({id, image, title, price,brand, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <>
    <div className="cartItem">
      <img className="cartItem__image hover:scale-[1.1]" src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title text-sky-700">{title}</p>
        <p className='text-[18px] text-red-800'>{brand}</p>
        <p className="cartItem__price">
          <small className='text-orange-500'>$</small>
          <strong className='text-orange-400'>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
    </>
  )
}

export default CartItem