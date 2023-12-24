import { FaXmark } from "react-icons/fa6"
import { Navigation } from "../pages";
import {useDispatch,useSelector} from 'react-redux'
import { setNav } from "../features/NavSlice";
const SideNavigation = () => {
    const {mode} = useSelector(state=>state.nav)
    const dispatch = useDispatch()
  return (
    <div
      className={`fixed  top-0 right-0 bg-white w-[300px] z-[3333] h-screen transition-transform ease-in-out duration-500 ${
        mode ? '' : 'transform translate-x-[300px]'
              }`}
         

      >
          <div className="absolute right-5 top-5">
              <FaXmark className="cursor-pointer" onClick={()=>dispatch(setNav())} />
          </div>
        
      <Navigation desktop/>
    </div>
  );
};

export default SideNavigation;
