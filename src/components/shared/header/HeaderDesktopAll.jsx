import { IoIosArrowBack } from 'react-icons/io'
import { HeaderNav, SearchBox } from '../../home'
import { Link } from 'react-router-dom'

const HeaderDesktopAll = ({ home = false, scrolled }) => {
  console.log(scrolled)
  return (
    <section
      className={`hidden md:block w-full fixed top-0 ${
        home && !scrolled ? 'border-none' : 'border-b border-slate-200'
      } h-20 ${home && !scrolled ? 'bg-transparent' : 'bg-white'} transition-all ease-in-out delay-50 z-50  `}
    >
      <div className='md:container md:w-full md:mx-auto  md:flex md:justify-between  mx-4 mb-4 md:px-0 md:my-4 md:relative md:z-50 '>
        <div
          className={`flex gap-1 items-center ${home ? 'invisible' : 'block'}`}
        >
          <IoIosArrowBack />
          <Link to='/'> Back to Home</Link>
        </div>
        <div className='md:ml-2'>
          <div>
            <SearchBox />
          </div>
        </div>
        <div className='hidden md:flex md:items-center'>
          <HeaderNav home scrolled={scrolled} />
        </div>
      </div>
    </section>
  )
}
export default HeaderDesktopAll
