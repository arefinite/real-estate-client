import { RiWhatsappFill } from 'react-icons/ri'
import { IoIosMail } from 'react-icons/io'
import { IoMenuSharp } from 'react-icons/io5'

const HeaderNav = ({ home }) => {
  return (
    <div className='flex space-x-5 items-center'>
      <div className='flex space-x-3'>
        <div>
          <RiWhatsappFill className='text-green-500 text-xl' />
        </div>
        <div className=''>
          <IoIosMail className={ `text-xl ${home ? 'text-black': 'text-white'} `} />
        </div>
      </div>
      <div>
        <IoMenuSharp className={ `text-3xl ${home ? 'text-black': 'text-white'} `} />
      </div>
    </div>
  )
}
export default HeaderNav
