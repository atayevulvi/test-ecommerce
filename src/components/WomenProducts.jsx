import { useState } from 'react';
import { WomenShirt } from '../apiFolder/WomenShirt';
import WomenProduct from './WomenProduct';

const WomenProducts = () => {
    const [data, setData] = useState(WomenShirt);
    const [inputData, setInputData] = useState('');
    const [sortBy, setSortBy] = useState('asc'); 

    const mehsulAxtar = (axtarisSozu) => {
        setInputData(axtarisSozu);
        const tapilanlar = WomenShirt.filter((item) =>
            item.title.toLowerCase().includes(axtarisSozu.toLowerCase())
        );
        setData(tapilanlar);
    };

    const resetData = () => {
        setInputData('');
        setData(WomenShirt);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        const sortedData = [...data].sort((a, b) => {
            if (e.target.value === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
        setData(sortedData);
    };

    return (
        <>
            <div className='conatiner-xxl px-8 mx-auto flex flex-col'>
                <div className='text-blue-500 text-[20px] ml-12 flex items-center justify-center mb-3'>
                    <h1>Women Clothes</h1>
                </div>
                <div className="flex items-center justify-center">
                    <input
                        className="outline-none border w-[20%] h-[40px]"
                        type="text"
                        onChange={(e) => mehsulAxtar(e.target.value)}
                        value={inputData}
                    />
                    <button className="border w-14 h-10 bg-black text-white" onClick={resetData}>
                        Reset
                    </button>
                    <select
                        className="outline-none border ml-4 p-1"
                        value={sortBy}
                        onChange={handleSortChange}
                    >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>
                <div className='flex flex-wrap items-center justify-center'>
                    {data.length > 0 &&
                        data.map((product, index) => (
                            <WomenProduct item={product} key={index} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default WomenProducts;
