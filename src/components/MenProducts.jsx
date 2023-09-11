import { MenClothes } from '../apiFolder/MenClothes'
import MenProduct from './MenProduct'
const MenProducts = () => {
  return (
    <>
      <div className='conatiner-xxl px-8 mx-auto my-3'>
        <div>
          <h1 className='text-[20px] text-blue-700 flex items-center justify-center'>Men Clothes</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          {MenClothes.length > 0 && MenClothes.map((product, index) => (
            <MenProduct item={product} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MenProducts
