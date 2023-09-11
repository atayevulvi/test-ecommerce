import './total.css'
import { useSelector } from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart.cart)

  const getTotalAmount = cart.reduce((acc, item) => acc += (item.price * item.quantity), 0)
  const getTotalQuantity = cart.reduce((acc, item) => acc += item.quantity, 0)
  
  return (
    <div className="total">
      <h2 className='text-blue-900'>ORDER SUMMARY</h2>
      <div>
        <p className="total__p text-red-700">
          total ({getTotalQuantity} items)
          : <strong>${getTotalAmount}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total