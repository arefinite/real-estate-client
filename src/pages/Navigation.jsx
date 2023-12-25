import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import { Link } from "react-router-dom"
import SecondaryHeader from "../components/shared/header/SecondaryHeader"

import {useDispatch} from 'react-redux'
import { setNav } from "../features/NavSlice"
const Navigation = ({desktop=false}) => {
	// const [linkName,setLinkName] = useState(linkName)
	// const handleLink = () => {
		
	// }
	const dispatch = useDispatch()
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	return (
		<nav>
			{!desktop && <SecondaryHeader link='/' icon='delete' name='Menu' />}

			<div className='px-6 space-y-2 text-stone-700'>
				<h1 className='mt-12 nav-item'>
					
						<span>Latest Projects</span>
					
				</h1>

				<h1 className='nav-item'>
				
						<span>Luxury Projects</span>
					
				</h1>

				<h1 className='nav-item' onClick={() => { setShow1(prev => !prev); setShow2(false); setShow3(false) }}>
					<span className='flex items-center gap-2'>
						Dubai Projects For Sale{" "}
						{show1 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show1 && (
					<div className='dropdown pb-3'>
						<ul className=' leading-10'>
						
								<li>Luxury Projects</li>
							
								<li>Apartments</li>
							
								<li>Vila</li>
						
								<li>Penthouse</li>
							
								<li>Townhouse</li>
							
								<li>Land Plots</li>
							
						</ul>
					</div>
				)}
				<h1 className='nav-item' onClick={() => { setShow2(prev => !prev); setShow1(false); setShow3(false) }}>
					<span className='flex items-center gap-2'>
						Dubai Areas{" "}
						{show2 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show2 && (
					<div className='dropdown'>
						<ul className=' leading-10 pb-3'>
							
								<li>Palm Jumeirah</li>
							
							
								<li>Downtown Dubai</li>
							
							
								<li>Dubai Hills Estate</li>
							
							
								<li>Dubai Creek Harbour</li>
							
							
								<li>Business Bay</li>
							
							
								<li><Link to='/dubai-areas' onClick={()=>dispatch(setNav())}>View All</Link></li>
							
						</ul>
					</div>
				)}

				<h1 className='nav-item' onClick={() => { setShow3(prev => !prev), setShow1(false); setShow2(false) }}>
					<span className='flex items-center gap-2'>
						Explore{" "}
						{show3 ? (
							<IoIosArrowUp style={{ color: "#808080" }} />
						) : (
							<IoIosArrowDown style={{ color: "#808080" }} />
						)}
					</span>
				</h1>
				{show3 && (
					<div className='dropdown'>
						<ul className=' leading-10 pb-3'>
							
								<li>Why Dubai</li>
							
							
								<li>Invest in Dubai Real Estate</li>
							
							
								<li>Dubai Fact Numbers</li>
							
							
								<li>Guide To Off Plan</li>
							
							
								<li>Why Invest In Off Plan</li>
							
							
								<li>Guide on Renting</li>
							
							
								<li>Guide to Selling</li>
							
						</ul>
					</div>
				)}

				<h1 className='nav-item'>
					
                    <span className='flex items-center gap-2'>
                        <Link to='/dubai-developers' onClick={()=>dispatch(setNav())}>Dubai Developers</Link>
                        </span>
					
				</h1>

				<h1 className=' nav-item'>
					
						<span className='flex items-center gap-2'>Blogs</span>
					
				</h1>

				<h1 className=' nav-item'>
			
						<span className='flex items-center gap-2'>Sell Your Property</span>
					
				</h1>

				<h1 className=' nav-item'>
					
						<span className='flex items-center gap-2'>About Us</span>
					
				</h1>

				<h1 className=' nav-item'>
			
						<span className='flex items-center gap-2'>Contact Us</span>
					
				</h1>
			</div>
		</nav>
	)
}

export default Navigation