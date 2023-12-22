import { CiSearch } from "react-icons/ci"
import { PiSlidersFill } from "react-icons/pi"
const SearchBox = ({placeholder,icon=true}) => {
	return (

			<div className='flex gap-1 w-full items-center'>
				<div className='flex items-center min-w-0 flex-grow h-12 md:h-9 overflow-hidden bg-white shadow-lg border border-stone-100 p-2 rounded-full'>
					<CiSearch className='text-xl font-bold ml-1' />
					<input
						className='ml-1 items-center outline-none bg-white text-stone-400 flex-grow min-w-0 w-80'
						type='search'
						placeholder={placeholder ? placeholder : 'Search Properties, Area...'}
					/>
				</div>
			{
				icon && <div className='md:h-9 md:w-9 h-12 w-12 md:p-2 p-3 bg-black rounded-[100%]  text-white flex items-center justify-center md:text-lg text-2xl'>
				<PiSlidersFill />
			</div>
				}
			</div>

	)
}
export default SearchBox