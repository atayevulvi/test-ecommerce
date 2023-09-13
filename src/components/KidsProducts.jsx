import { useState } from 'react'
import { KidsProductss } from '../apiFolder/KidssProducts'
import KidsProduct from './KidsProduct'

const KidsProducts = () => {
    const [data, setData] = useState(KidsProductss)
    const [inputData, setInputData] = useState('')

    const mehsulAxtar = (axtarisSozu) => {
        setInputData(axtarisSozu);
        const tapilanlar = KidsProductss.filter((item) =>
            item.title.toLowerCase().includes(axtarisSozu.toLowerCase())
        );
        setData(tapilanlar);
    };
    const resetData = () => {
        setInputData('');
        setData(KidsProductss)
    }
    return (
        <>
            <div className='conatiner-xxl px-8 mx-auto flex flex-col my-4'>
                <div className='text-blue-500 text-[20px] ml-12 flex items-center justify-center mb-3'>
                    <h1>Kid Clothes</h1>
                </div>
                <div className="flex items-center justify-center">
                    <input className="outline-none border w-[20%] h-[40px]"
                        type="text"
                        onChange={(e) => mehsulAxtar(e.target.value)}
                        value={inputData}
                    />
                    <button className="border w-14 h-10 bg-black text-white" onClick={resetData}>Reset</button>
                </div>
                <div className='flex flex-wrap items-center justify-center'>
                    {data.length > 0 && data.map((product, index) => (
                        <KidsProduct item={product} key={index} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default KidsProducts
