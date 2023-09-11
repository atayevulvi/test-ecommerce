import Marquee from "react-fast-marquee";
import trainer1 from '../assets/WomenTrainers/trainer1.jpg'
import trainer2 from '../assets/WomenTrainers/trainer2.webp'
import trainer3 from '../assets/WomenTrainers//trainer3.jpg'
import trainer4 from '../assets/WomenTrainers/trainer4.webp'
import trainer5 from '../assets/WomenTrainers/trainer5.webp'
import trainer6 from '../assets/WomenTrainers/trainer6.webp'
import trainer7 from '../assets/WomenTrainers/trainer7.jpg'
import trainer8 from '../assets/WomenTrainers/trainer8.jpg'
import trainer9 from '../assets/WomenTrainers/trainer9.webp'

const Hero = () => {
    return (
        <>
            <div className="container-xxl px-8 mx-auto">
                <div>
                    <h1 className="text-[20px] text-red-800">Women trainers</h1>
                </div>
                <Marquee>
                    <div className="flex   flex-2 border-2 gap-4 items-center justify-center min-w-[300px] min-h-[250px] my-2">
                        <div className="mx-auto border text-center"><img className='max-w[200px] max-h-[200px]' src={trainer1} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer2} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer3} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer4} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer5} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer6} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer7} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer8} alt="" /></div>
                        <div className="mx-auto  border text-center"><img className='max-w-[200px] max-h-[200px]' src={trainer9} alt="" /></div>
                    </div>

                </Marquee>
            </div>
        </>
    )
}

export default Hero
