import HeaderDesktopAll from '../shared/header/HeaderDesktopAll'
import BannerImage from './BannerImage'

const TopBanner = () => {
  return (
    <section>
      <HeaderDesktopAll home />
      <div className='md:relative  md:bottom-40 md:-mb-40 md:z-20'>
        <BannerImage />
      </div>
    </section>
  )
}
export default TopBanner
