import { IoIosArrowBack } from 'react-icons/io'
import { HeaderNav, SearchBox } from '../../home'
import { Link } from 'react-router-dom'

const HeaderDesktopAll = ({home=false}) => {
  return (
      <section className={`hidden md:block w-full fixed top-0 ${home ? 'shadow-none' : 'shadow-lg'} h-20 ${home ? 'bg-transparent' : 'bg-white'} z-50 `}>
          <div className='md:container md:w-full md:mx-auto  md:flex md:justify-between  mx-4 mb-4 md:px-0 md:my-4 md:relative md:z-50 '>
      <div className={`flex gap-1 items-center ${home? 'invisible' : 'block'}`}>
      <IoIosArrowBack /><Link to='/'> Back to Home</Link>
      </div>
      <div className='md:ml-2'>
        <div>
          <SearchBox />
        </div>
      </div>
      <div className='hidden md:flex md:items-center'>
        <HeaderNav home />
      </div>
    </div>
    </section>
  )
}
export default HeaderDesktopAll
