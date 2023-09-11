import { WomenShirt } from '../apiFolder/WomenShirt'
import WomenProduct from './WomenProduct'

const WomenProducts = () => {
    return (
        <>
           <div className='conatiner-xxl px-8 mx-auto flex flex-col'>
            <div  className='text-blue-500 text-[20px] ml-12 flex items-center justify-center mb-3'>
                <h1>Women Clothes</h1>
            </div>
           <div className='flex flex-wrap items-center justify-center'>
           {WomenShirt.length > 0 && WomenShirt.map((product, index) => (
                <WomenProduct item={product} key={index}/>
            ))}
           </div>
          
           </div>
        </>
    )
}

export default WomenProducts
