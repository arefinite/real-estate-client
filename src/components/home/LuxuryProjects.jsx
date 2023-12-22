// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import { houseData } from '../../data/houseData'

const LuxuryProjects = () => {
  return (
    <div className='md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-4 '>
      {houseData.slice(-3).map(house => (
        <div
          key={house.id}
          className='border-b border-b-slate-200 md:border-0 '
        >
          <div className='pb-4'>
            {/* <img src={house.url} alt={house.id} className='h-56 object-cover w-full ' /> */}

            <div>
              <Swiper
                pagination={true}
                style={{ '--swiper-pagination-color': '#000' }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {houseData.slice(5).map(h => (
                  <SwiperSlide key={h.id}>
                    <img
                      src={h.url}
                      alt={h.id}
                      className='h-56 object-cover w-full '
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='mt-2 px-4 md:px-0 '>
              <p className='font-bold'>IGO Society House</p>
              <p className='text-stone-400'>
                <small>Downtown Dubai</small>
              </p>
              <p className='mt-2'>
                <small>From</small>{' '}
                <span className='font-bold'>AED 320,000,000</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default LuxuryProjects
