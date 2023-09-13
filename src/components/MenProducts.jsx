import { useState } from "react";
import { MenClothes } from '../apiFolder/MenClothes';
import MenProduct from './MenProduct';

const MenProducts = () => {
  const [data, setData] = useState(MenClothes);
  const [inputData, setInputData] = useState("");

  const mehsulAxtar = (axtarisSozu) => {
    setInputData(axtarisSozu);
    const tapilanlar = MenClothes.filter((item) =>
      item.title.toLowerCase().includes(axtarisSozu.toLowerCase())
    );
    setData(tapilanlar);
  };

  const resetData = () => {
    setInputData("");
    setData(MenClothes);
  };

  return (
    <>
      <div className='conatiner-xxl px-8 mx-auto my-3'>
        <div>
          <h1 className='text-[20px] text-blue-700 flex items-center justify-center'>Men Clothes</h1>
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
            <MenProduct item={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenProducts;
