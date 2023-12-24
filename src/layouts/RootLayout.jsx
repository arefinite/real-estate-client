import {Outlet} from 'react-router-dom'
import Wrapper from '../components/Wrapper'
const RootLayout = () => {
  return (
      <>
      <Wrapper>
      <Outlet/>
       </Wrapper>
      </>
  )
}
export default RootLayout