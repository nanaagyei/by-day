import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, MapPin, Shield, Star } from "lucide-react"
import CategorySection from "@/components/category-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialSection from "@/components/testimonial-section"
import HeroSlideshow from "@/components/hero-slideshow"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid min-h-[600px] gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Professional Services, <span className="text-primary">On Demand</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with skilled professionals in your area for immediate assistance or schedule services in
                  advance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button size="lg" className="gap-1">
                    Find Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/professionals/register">
                  <Button size="lg" variant="outline">
                    Become a Professional
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-[800px]">
                <HeroSlideshow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose ByDay?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform connects you with skilled professionals for all your service needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Location-Based</h3>
              <p className="text-center text-muted-foreground">
                Find professionals near you with our advanced geolocation matching
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Instant Booking</h3>
              <p className="text-center text-muted-foreground">
                Book services instantly or schedule them for a later date and time
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Verified Professionals</h3>
              <p className="text-center text-muted-foreground">
                All professionals are verified and rated by our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who trust ByDay for their service needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/services">
                <Button size="lg" className="gap-1">
                  Find Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/professionals/register">
                <Button size="lg" variant="outline">
                  Become a Professional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
