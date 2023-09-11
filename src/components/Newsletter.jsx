
import {AiOutlineSend} from 'react-icons/ai';
const Newsletter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
      <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
      <h2 className='text-[20px] mt-2'>Always in touch with us,for your favorite products</h2>
      <div className='flex justify-between mt-[3rem] items-center min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
        <input type="email" placeholder='email' className='outline-none border-none flex-[7] pl-[20px]'/>
        <button className=' bg-[#4caf50] flex-1  text-[30px] h-[100%]'><AiOutlineSend className='text-white ml-2'/></button>
      </div>
    </div>
  )
}

export default Newsletter
