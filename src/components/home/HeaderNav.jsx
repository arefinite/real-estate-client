import { RiWhatsappFill } from 'react-icons/ri'
import { IoIosMail } from 'react-icons/io'
import { IoMenuSharp } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setNav } from '../../features/NavSlice'


const HeaderNav = ({ scrolled }) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  console.log(pathname);
  return (
    <div className='flex space-x-5 items-center'>
      <div className='flex space-x-3'>
        <div>
          <RiWhatsappFill className='text-green-500 text-2xl' />
        </div>
        <div className=''>
          <IoIosMail className={ `text-2xl ${pathname  === '/'  && !scrolled? 'text-white': 'text-black'}  `} />
        </div>
      </div>
      <div>
        <IoMenuSharp onClick={()=>dispatch(setNav())}  className={ `text-4xl ${pathname==='/' && !scrolled ? 'text-white': 'text-black'} cursor-pointer `} />
      </div>
    </div>
  )
}
export default HeaderNav
