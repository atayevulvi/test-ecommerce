// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import menShop1 from '../assets/menShop1.jpg'
import menShop2 from '../assets/menShop2.jpg'
import womenShop1 from '../assets/womenShop1.jpg'
import womenShop2 from '../assets/womenShop2.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={menShop1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={womenShop1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={menShop2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={womenShop2} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
