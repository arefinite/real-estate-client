import { houseData } from "../../data/houseData"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const ProjectForSaleCart = () => {
  return (
      <div className="md:container md:mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-2 gap-4 ">
          {
              houseData.map(house => (
                  <div key={house.id} className="border-b border-b-slate-200 md:border-0 ">
                       <div className="pb-4">
              <Swiper
                pagination={true}
                style={{ '--swiper-pagination-color': '#000' }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {houseData.reverse().map((h,i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={h.url}
                      alt={h.id}
                      className='h-80 object-cover w-full '
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
        

                <div className='mt-2 px-4 md:px-0 '>
                    <p className='font-bold'>IGO Society House</p>
                              <p className='text-stone-400'><small>Downtown Dubai</small></p>
                              <p className="mt-2" ><small>From</small> <span className="font-bold">AED 320,000,000</span></p>
                  </div>
            </div>
               </div>
              ))
          }
    </div>
  )
}
export default ProjectForSaleCart