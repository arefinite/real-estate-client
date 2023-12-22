import { DubaiSection, SearchBox } from '../components/home'
import Breadcrumb from '../components/shared/Breadcrumb'
import HeaderDesktopAll from '../components/shared/header/HeaderDesktopAll'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import Footer from '../components/shared/footer/Footer'
import BottomNavigation from '../components/shared/BottomNavigation'
import { houseData } from '../data/houseData'

const DubaiAreas = () => {
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />
      <HeaderDesktopAll />
      <div className='container mx-auto my-4'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Areas' />
        <DubaiSection title='Dubai Areas' />
        <div className='max-w-96 mx-auto px-4 md:px-0'>
          <SearchBox placeholder='Search Areas' icon={false} />
        </div>
        <div className='md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-2 mt-10 gap-4 '>
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
                    <p className='text-stone-400 underline'><small>View Map</small></p>
                  </div>
                  <p className='text-stone-400 underline'>
                    <small>450 Properties</small>
                  </p>
                 <button className='bg-black text-white w-full py-3 mt-4 md:hidden'>Explore More</button>
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
export default DubaiAreas
