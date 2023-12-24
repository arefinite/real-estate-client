import { HeaderNav, SearchBox } from '../../home'

const HeaderDesktop = () => {
  return (
    <div className='md:container fixed top-0  md:flex md:justify-between bg-white w-screen  z-50'>
      <div className='px-4 relative bottom-3'>
      <div className='invisible'>Back to Home</div>
      <div>
        <div>
          <SearchBox />
        </div>
      </div>
      <div className='hidden md:flex md:items-center'>
        <HeaderNav />
      </div>
     </div>
    </div>
  )
}
export default HeaderDesktop
