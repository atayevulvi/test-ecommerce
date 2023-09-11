import { KidsProductss } from '../apiFolder/KidssProducts'
import KidsProduct from './KidsProduct'

const KidsProducts = () => {
    return (
        <>
           <div className='conatiner-xxl px-8 mx-auto flex flex-col my-4'>
            <div  className='text-blue-500 text-[20px] ml-12 flex items-center justify-center mb-3'>
                <h1>Kid Clothes</h1>
            </div>
           <div className='flex flex-wrap items-center justify-center'>
           {KidsProductss.length > 0 && KidsProductss.map((product, index) => (
                <KidsProduct item={product} key={index}/>
            ))}
           </div>
          
           </div>
        </>
    )
}

export default KidsProducts
