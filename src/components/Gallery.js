import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/controller/controller.scss'

import pic1 from '../../src/assets/pic1.jpg'
import pic2 from '../../src/assets/pic2.jpg'
import pic3 from '../../src/assets/pic3.jpg'
import pic4 from '../../src/assets/pic4.jpg'
import pic5 from '../../src/assets/pic5.jpg'
import pic6 from '../../src/assets/pic6.jpg'
import pic7 from '../../src/assets/pic7.jpg'
import pic8 from '../../src/assets/pic8.jpg'
import pic9 from '../../src/assets/pic9.jpg'
import pic10 from '../../src/assets/pic10.jpg'
import pic11 from '../../src/assets/pic11.jpg'
import pic12 from '../../src/assets/pic12.jpg'
import pic13 from '../../src/assets/pic13.jpg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class Gallery extends React.Component {

  render() {
    return(
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title is-1 has-text-white has-text-centered">Gallery</h1>
          </div>
          <div className="gallery-container">
            <div className="slide-styles">
            <Swiper
              spaceBetween={25}
              slidesPerView={1}
              keyboard={{ enabled: true }}
              navigation
              autoplay={{ enabled: true }}
              loop
              controller
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src={pic1} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic2} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic3} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic4} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic5} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic6} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic7} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic8} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic9} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic10} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic11} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic12} alt="gallery" className="gallery-pics" /></SwiperSlide>
              <SwiperSlide><img src={pic13} alt="gallery" className="gallery-pics" /></SwiperSlide>
              ...
            </Swiper>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery