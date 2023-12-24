import { useEffect, useState } from 'react';
import HeaderDesktop from '../shared/header/HeaderDesktop'
import HeaderDesktopAll from '../shared/header/HeaderDesktopAll'
import BannerImage from './BannerImage'

const TopBanner = ({navOpen,setNavOpen}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <section className='h-screen'>
      <div className='md:hidden'>
        <HeaderDesktop home navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      <div>
        <HeaderDesktopAll home scrolled={scrolled} />
      </div>
      <div className='md:relative h-full  md:z-20'>
        <BannerImage />
      </div>
    </section>
  )
}
export default TopBanner
