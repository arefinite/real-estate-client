import HeaderDesktop from '../shared/header/HeaderDesktop'
import HeaderDesktopAll from '../shared/header/HeaderDesktopAll'
import BannerImage from './BannerImage'

const TopBanner = () => {
  return (
    <section className='h-screen'>
      <div className='md:hidden'>
        <HeaderDesktop home />
      </div>
      <div>
        <HeaderDesktopAll home/>
      </div>
      <div className='md:relative h-full  md:z-20'>
        <BannerImage />
      </div>
    </section>
  )
}
export default TopBanner
