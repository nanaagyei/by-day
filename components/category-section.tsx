import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Home, Paintbrush, Wrench } from "lucide-react"

export default function CategorySection() {
  const categories = [
    {
      title: "Home Maintenance",
      description: "Repairs, installations, and general maintenance for your home",
      icon: <Home className="h-8 w-8" />,
      href: "/services/home-maintenance",
    },
    {
      title: "Cleaning",
      description: "Professional cleaning services for homes and offices",
      icon: <Paintbrush className="h-8 w-8" />,
      href: "/services/cleaning",
    },
    {
      title: "Handyman",
      description: "General repairs and improvements around your property",
      icon: <Wrench className="h-8 w-8" />,
      href: "/services/handyman",
    },
    {
      title: "Professional Services",
      description: "Specialized professional services for businesses and individuals",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/services/professional",
    },
  ]

  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse Service Categories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the right professional for any job
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={category.href} className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    View Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
