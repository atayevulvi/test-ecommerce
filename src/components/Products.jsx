import { ApiTopProduct } from '../apiFolder/ApiTopProducts'
import Product from '../components/Product'
const Products = () => {
    return (
        <>
       <div className='container-xxl px-8 mx-auto flex flex-col bg-[#2d2e2f]'>
       <div className='text-blue-500 text-[20px] ml-12'>
            <h1>Man and Woman Shirts</h1>
        </div>
        <div className='flex flex-wrap  items-center justify-center'>
            {ApiTopProduct.length > 0 && ApiTopProduct.map((product, index) => (
                <Product item={product} key={index} />
            ))}
        </div>
       </div>
        </>
    )
}

export default Products
