
import { DubaiAreaSlider, DubaiSection, LatestProjectSlider, LuxuryProjects, ProjectForSale, ProjectForSaleCart, TopBanner } from "../components/home"
import BottomNavigation from "../components/shared/BottomNavigation"
import Footer from "../components/shared/footer/Footer"

const Home = () => {

  return (
      <>
          <TopBanner  />
          <DubaiSection title="Dubai Latest Project">
              <LatestProjectSlider />
          </DubaiSection>
          <DubaiSection title="Dubai Luxury Projects">
              <LuxuryProjects  />
          </DubaiSection>
          <DubaiSection title='Dubai Project For Sale'>
              <ProjectForSale />
              <ProjectForSaleCart />
          </DubaiSection>
          <DubaiSection title='Dubai Areas'>
              <DubaiAreaSlider/>
          </DubaiSection>
          <Footer />
          <BottomNavigation/>
      </>
  )
}
export default Home