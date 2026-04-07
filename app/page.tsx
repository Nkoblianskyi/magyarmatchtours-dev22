import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import HeroSection from '@/components/home/hero-section'
import JourneyStorySection from '@/components/home/journey-story-section'
import ToursPreviewSection from '@/components/home/tours-preview-section'
import TravelInsightsSection from '@/components/home/travel-insights-section'
import FaqSection from '@/components/home/faq-section'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <JourneyStorySection />
        <ToursPreviewSection />
        <TravelInsightsSection />
        <FaqSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
