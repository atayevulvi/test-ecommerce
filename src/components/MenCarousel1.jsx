// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styless.css';
import shop1 from '../assets/MenShop/shop1.webp'
import shop2 from '../assets/MenShop/shop2.jpg'
import shop3 from '../assets/MenShop/shop3.jpg'
import shop4 from '../assets/MenShop/shop4.webp'
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={shop1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shop2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shop4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shop3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
