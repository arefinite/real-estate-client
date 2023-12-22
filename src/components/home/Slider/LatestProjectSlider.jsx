// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { houseData } from '../../../data/houseData';
const LatestProjectSlider = () => {
  return (
    <div className='border-b border-b-slate-200 md:border-0'>
          <Swiper
              style={{ "--swiper-pagination-color": "#000"}}
        slidesPerView={1}
        spaceBetween={7}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 7,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 7,
          },
              }}
              
        modules={[Pagination]}
        className="mySwiper"
      >
              {
                  houseData.map(house => (
                      <SwiperSlide key={house.id}>
                          <div className='h-80'>
                              <div>
                              <img src={house.url} alt={house.id} className='h-56 object-cover w-full ' />
                          </div>
                              <div className='mt-2 px-4 md:px-0 '>
                                  <p className='font-bold'>IGO Society House</p>
                                  <p className='text-stone-400'><small>Downtown Dubai</small></p>
                                </div>
                          </div>
                    </SwiperSlide>
                  ))
        }
      
      </Swiper>
    </div>
  )
}
export default LatestProjectSlider