import {Outlet} from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import SideNavigation from '../components/SideNavigation'
const RootLayout = () => {

  return (
      <>
      <Wrapper>
        <SideNavigation/>
        <Outlet  />
       </Wrapper>
      </>
  )
}
export default RootLayout