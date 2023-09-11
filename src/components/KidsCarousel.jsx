import kids1 from '../assets/KidsClothes/kids1.webp'
import kids2 from '../assets/KidsClothes/kids2.png'
import kids3 from '../assets/KidsClothes/kids3.webp'
import kids4 from '../assets/KidsClothes/kids4.jpg'
import kids5 from '../assets/KidsClothes/kids5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src={kids1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kids2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kids3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kids4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kids5} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
