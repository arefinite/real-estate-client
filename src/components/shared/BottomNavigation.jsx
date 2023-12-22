import HomeIcon from "/feather-home.svg"
import SearchIcon from "/ionic-ios-search.svg"
import GlobeIcon from "/feather-globe.svg"
import MessageIcon from "/feather-message-square.svg"
import MenuIcon from "/feather-menu.svg"
import { Link } from "react-router-dom"
const BottomNavigation = () => {
	return (
		<div className='md:hidden  shadow-lg border-t border-t-stone-200 fixed z-10 bottom-0 bg-white h-[60px] flex items-center justify-between w-full px-4 text-stone-900'>
			<Link to='/'>
				<div className='flex flex-col justify-center items-center text-base space-y-1'>
					<span>
						<img src={HomeIcon} alt='' />
					</span>
					<span className='text-xs'>Home</span>
				</div>
			</Link>

			
				<div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
					<span>
						<img src={SearchIcon} alt='' />
					</span>
					<span className='text-xs'>Search</span>
				</div>
		
			
				<div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
					<span>
						<img src={GlobeIcon} alt='' />
					</span>
					<span className='text-xs'>Map</span>
				</div>
		
			
				<div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
					<span>
						<img src={MessageIcon} alt='' />
					</span>
					<span className='text-xs'>Inquiry</span>
				</div>
			
			<Link to='/navigation'>
				<div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
					<span>
						<img src={MenuIcon} alt='' />
					</span>
					<span className='text-xs'>Menu</span>
				</div>
			</Link>
		</div>
	)
}
export default BottomNavigation