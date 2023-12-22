import Copyright from "./Copyright"
import FooterNavigation from "./FooterNavigation"
import QuickLinks from "./QuickLinks"

const Footer = () => {
  return (
      <footer className="w-full bg-black text-white text-sm mt-12">
          <FooterNavigation />
          <QuickLinks />
          <Copyright/>
    </footer>
  )
}
export default Footer