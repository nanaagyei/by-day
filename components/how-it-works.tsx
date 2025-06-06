import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Search, UserCheck } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      title: "Search for Services",
      description: "Browse through our wide range of service categories or search for specific services",
      icon: <Search className="h-8 w-8" />,
    },
    {
      title: "Find Nearby Professionals",
      description: "Our geolocation system matches you with verified professionals in your area",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: "Book Instantly or Schedule",
      description: "Choose between immediate assistance or schedule services for a later date",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      title: "Get Quality Service",
      description: "Receive professional service and rate your experience afterward",
      icon: <UserCheck className="h-8 w-8" />,
    },
  ]

  return (
    <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How ByDay Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple steps to connect with skilled professionals
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {index + 1}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/how-it-works">
            <Button size="lg">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
