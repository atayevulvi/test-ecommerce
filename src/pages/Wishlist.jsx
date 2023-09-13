import Header from "../components/Header"
import Footer from "../components/Footer"
import WishItem from "../components/WishItem"
import { useSelector } from "react-redux"

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    return (
        <>
            <Header />
            <div>
                <div>
                    <div>
                        {wishlist?.map((item) => (
                            <WishItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                ti tle={item.title}
                                brand={item.brand}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Wishlist
