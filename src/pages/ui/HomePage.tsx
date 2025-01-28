import AboutUs from '@/components/ui/about-us'
import FeaturedProduct from '../../components/ui/featured-product'
import PricingTable from '@/components/ui/PricingTable'
import Testimonial from '@/components/ui/Testimonial'
import HeroBanner from '@/components/ui/heroBanner'

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <FeaturedProduct />
      <PricingTable />
      <Testimonial />
    </>
  )
}

export default HomePage
