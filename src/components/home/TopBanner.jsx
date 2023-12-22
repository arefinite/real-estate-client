import HeaderDesktop from '../shared/header/HeaderDesktop'
import BannerImage from './BannerImage'

const TopBanner = () => {
  return (
    <section>
      <HeaderDesktop />
      <div className='md:relative  md:bottom-40 md:-mb-40 md:z-20'>
        <BannerImage />
      </div>
    </section>
  )
}
export default TopBanner
