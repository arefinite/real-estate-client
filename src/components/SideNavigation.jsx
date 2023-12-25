import { FaXmark } from 'react-icons/fa6'
import { Navigation } from '../pages'
import { useDispatch, useSelector } from 'react-redux'
import { setNav } from '../features/NavSlice'
const SideNavigation = () => {
  const { mode } = useSelector(state => state.nav)
  const dispatch = useDispatch()
  return (
    <>
     <div
      className={`fixed shadow-2xl overflow-auto overscroll-contain top-0 right-0 bg-white w-[300px] z-[3333] h-screen transition-transform ease-in-out duration-500 ${
        mode ? '' : 'transform translate-x-[300px]'
      }`}
    >
      <div className='absolute right-5 top-5'>
        <FaXmark
          className='cursor-pointer'
          onClick={() => dispatch(setNav())}
        />
      </div>

      <Navigation desktop />
    </div>
      <div onClick={()=>dispatch(setNav(false))} className={ `${mode && "fixed bg-black opacity-50 h-full w-full z-[1000] inset-0"}`}></div></>
  )
}

export default SideNavigation
