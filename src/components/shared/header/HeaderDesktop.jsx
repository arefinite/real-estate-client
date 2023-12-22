import { HeaderNav, SearchBox } from '../../home'

const HeaderDesktop = () => {
  return (
    <div className='md:container md:w-full md:mx-auto md:flex md:justify-between -mt-2  mx-4 mb-4 md:px-0 md:my-6 md:relative md:z-50 '>
      <div className='invisible'>Back to Home</div>
      <div className='md:ml-2'>
        <div>
          <SearchBox />
        </div>
      </div>
      <div className='hidden md:flex md:items-center'>
        <HeaderNav />
      </div>
    </div>
  )
}
export default HeaderDesktop
