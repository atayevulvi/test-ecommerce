
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
function Cart() {

  const cart = useSelector((state) => state.cart.cart)

  return (
    <>
    <Header/>
    <div className="cart flex justify-between conatiner-xxl">
      <div className="cart__left">
        <div>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              ti  tle={item.title}
              brand={item.brand}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right flex  mr-4 mt-5">
        <Total/>
      </div>

    </div>
    </>
  )
}

export default Cart