import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandVideo from '@/components/home/BrandVideo'
import Showroom3D from '@/components/home/Showroom3D'
import BrandMarquee from '@/components/home/BrandMarquee'
import MotivationalQuotes from '@/components/home/MotivationalQuotes'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <BrandVideo />
      <Showroom3D />
      <FeaturedProducts />
      <BrandMarquee />
      <MotivationalQuotes />
      <NewsletterSignup />
    </div>
  )
}
