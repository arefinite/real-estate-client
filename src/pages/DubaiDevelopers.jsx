import { DubaiSection, SearchBox } from '../components/home'
import Breadcrumb from '../components/shared/Breadcrumb'
import HeaderDesktopAll from '../components/shared/header/HeaderDesktopAll'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import dev1 from '/omniyat-logo.png'
import dev2 from '/emaar-logo.png'
import dev3 from '/damac-logo.png'
import dev4 from '/meraas-logo.png'
import Footer from '../components/shared/footer/Footer'
import BottomNavigation from '../components/shared/BottomNavigation'
import { Link } from 'react-router-dom'

const DubaiDevelopers = () => {
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />
      <HeaderDesktopAll />
      <div className='container mx-auto my-4'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Developers' />
        <DubaiSection title='Dubai Developers' />
        <div className='max-w-96 mx-auto px-4 md:px-0'>
          <SearchBox placeholder='Search Developers' icon={false} />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 px-4 md:px-0'>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:md:h-32 h-24 flex justify-center items-center'>
              <img src={dev1} alt='' className='md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev2} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev3} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev4} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev1} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev2} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev3} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev4} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev1} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev2} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev3} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev4} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev1} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev2} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev3} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev4} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev1} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev2} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev3} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={dev4} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </section>
  )
}
export default DubaiDevelopers
