import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandVideo from '@/components/home/BrandVideo'
import Showroom3D from '@/components/home/Showroom3D'
import ProductShowcase from '@/components/home/ProductShowcase'
import MotivationalQuotes from '@/components/home/MotivationalQuotes'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export default function Home() {
  return (
    <div className="relative">
      <ProductShowcase />
      <BrandVideo />
      <Showroom3D />
      <FeaturedProducts />
      <MotivationalQuotes />
      <NewsletterSignup />
    </div>
  )
}
