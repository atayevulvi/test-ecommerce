
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.avif'
import image3 from '../assets/image3.avif'
import image4 from '../assets/image4.avif'
import image5 from '../assets/image5.avif'
import image6 from '../assets/image6.avif'
import image7 from '../assets/image7.avif'






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>

      <div className="basliq">
        <div className="container-xxl">
          <div className="row">
            <div className=" text-center mt-3">
              <h1 className='text-[25px] text-blue-900'>New Arrivals</h1>
              <p className='mt-4 text-[20px] text-yellow-500'>Your Best Designer Outfits</p>
            </div>
          </div>
          <div className="swiper">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className='hover:scale-[1.1]' src={image1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image5} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image6} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='hover:scale-[0.80]' src={image7} />
              </SwiperSlide>
            
            </Swiper>
          </div>
        </div>
      </div>

    </>
  );
}


