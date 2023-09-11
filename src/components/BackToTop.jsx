import { BsArrowUpSquareFill } from 'react-icons/bs'

export default function BackToTop() {
    const backToTop = () => {
        window.scrollTo(0, 0);
    }
    return <BsArrowUpSquareFill 
    onClick={backToTop} 
    className='fixed right-5 bottom-10 opacity-100 z-50 w-20 h-12 text-white  hover:text-blue-600  ' />

}
