import { ProjectForSale } from '../components/home'

import HeaderDesktopAll from '../components/shared/header/HeaderDesktopAll'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import Footer from '../components/shared/footer/Footer'
import BottomNavigation from '../components/shared/BottomNavigation'
import { houseData } from '../data/houseData'
import dev2 from '/emaar-logo.png'
import Breadcrumb from '../components/shared/Breadcrumb'

const DubaiDeveloper = () => {
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />
      <HeaderDesktopAll />
      <div className='container mx-auto my-4'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Developers' link2='/dubai-developers' link3 link3Text='Dubai Developer' />
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4 md:px-0'>
            <div className='p-6 md:p-0 grid place-content-center md:border-0 border border-slate-300 w-full'>
              <img src={dev2} alt="" />
            </div>
            <div className=''>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum rem aspernatur ea minus! Id consequuntur dignissimos
                libero consequatur aperiam? Aspernatur.
              </p>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, eaque eius. Tenetur laborum neque sunt eius velit
                dignissimos dolore, doloremque optio eum repellat? Quae corporis
                enim, rem sint aut dicta optio, voluptate nobis, nulla eaque
                unde voluptates voluptatem? Ex, ea.
              </p>
              <button className='bg-black text-white w-1/2 py-3 mt-4'>Register Interest</button>
            </div>
          </div>
          <div className='mt-8'>
            <ProjectForSale />
          </div>
        </div>
        <h1 className='md:text-center heading px-4 md:px-0'>
          Emaar Properties For Sale
        </h1>
        <div className='md:container md:mx-auto grid grid-cols-1 mt-2 md:grid-cols-4 md:gap-2 gap-4 '>
          {houseData.map(house => (
            <div
              key={house.id}
              className='border-b border-b-slate-200 md:border-0 '
            >
              <div className='pb-4'>
                <div>
                  <img
                    src={house.url}
                    alt={house.id}
                    className='h-56 object-cover w-full '
                  />
                </div>
                <div className='mt-2 px-4 md:px-2  '>
                  <div className='flex justify-between'>
                    <p className='font-bold'>IGO Society House</p>
                  </div>
                  <p className='text-stone-400 '>
                    <small>Downtown Dubai</small>
                  </p>
                  <p className="mt-2" ><small>From</small> <span className="font-bold">AED 320,000,000</span></p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </section>
  )
}
export default DubaiDeveloper
