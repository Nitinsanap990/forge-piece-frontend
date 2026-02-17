import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandVideo from '@/components/home/BrandVideo'
import MotivationalQuotes from '@/components/home/MotivationalQuotes'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <BrandVideo />
      <FeaturedProducts />
      <MotivationalQuotes />
      <NewsletterSignup />
    </div>
  )
}
