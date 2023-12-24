import { ProjectForSale } from '../components/home'

import HeaderDesktopAll from '../components/shared/header/HeaderDesktopAll'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import Footer from '../components/shared/footer/Footer'
import BottomNavigation from '../components/shared/BottomNavigation'
import { houseData } from '../data/houseData'
import dev2 from '/emaar-logo.png'
import Breadcrumb from '../components/shared/Breadcrumb'
import RegisterInterest from '../components/RegisterInterest'
import { useState } from 'react'
import CommonModal from '../components/shared/CommonModal'

const DubaiDeveloper = () => {
  const [showModal,setShowModal] = useState(false)
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />
      <HeaderDesktopAll  />
      <div className='container mx-auto my-4'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Developers' link2='/dubai-developers' link3 link3Text='Dubai Developer' />
        <div >
          <div className='md:text-center mt-20 px-4 md:px-0 space-y-10'>
            <div className='p-6 md:p-0 flex-1  grid place-content-center md:border-0 border border-slate-300 w-full'>
              <img src={dev2} alt="" className='md:w-full h-12 md:mx-auto'  />
            </div>
            <div className='w-full md:max-w-[500px] mx-auto text-left'>
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
            </div>
              <button className='bg-black text-white w-full md:w-56 py-3 mt-4' onClick={()=>setShowModal(true)}>Register Interest</button>
          </div>
        
          {/* { registerInterest && <div><RegisterInterest/></div>} */}
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
                    className='h-80 object-cover w-full '
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
      <div className='hidden md:block'>
          {showModal &&
            <CommonModal setShowModal={setShowModal}>
              <RegisterInterest/>
            </CommonModal>
          }
          </div>
          <div className='md:hidden absolute top-0 bg-white'>
              <RegisterInterest/>
          </div>
    </section>
  )
}
export default DubaiDeveloper
