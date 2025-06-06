import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Briefcase, Home, Paintbrush, Search, Wrench, Car, Laptop, Heart, Shield, Utensils, Palette } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const categories = [
    {
      id: "home",
      name: "Home",
      icon: <Home className="h-5 w-5" />,
      services: [
        {
          title: "Plumbing & Pipefitting",
          description: "Complete plumbing solutions, repairs, and installations",
          href: "/services/plumbing",
        },
        {
          title: "Electrical Installation",
          description: "Electrical repairs, installations, and upgrades",
          href: "/services/electrical",
        },
        {
          title: "HVAC & Refrigeration",
          description: "Heating, ventilation, air conditioning, and refrigeration services",
          href: "/services/hvac",
        },
        {
          title: "Solar Panel Installation",
          description: "Solar system installation and maintenance",
          href: "/services/solar",
        },
        {
          title: "Generator Services",
          description: "Generator installation, repair, and maintenance",
          href: "/services/generator",
        },
      ],
    },
    {
      id: "construction",
      name: "Construction",
      icon: <Wrench className="h-5 w-5" />,
      services: [
        {
          title: "Masonry & Bricklaying",
          description: "Professional masonry and bricklaying services",
          href: "/services/masonry",
        },
        {
          title: "Tiling & Flooring",
          description: "Floor and wall tiling installation",
          href: "/services/tiling",
        },
        {
          title: "Roofing & Waterproofing",
          description: "Roof installation, repair, and waterproofing",
          href: "/services/roofing",
        },
        {
          title: "Interior Plastering",
          description: "Professional plastering and POP ceiling installation",
          href: "/services/plastering",
        },
        {
          title: "Landscaping",
          description: "Garden design and landscaping services",
          href: "/services/landscaping",
        },
      ],
    },
    {
      id: "tech",
      name: "Technology",
      icon: <Laptop className="h-5 w-5" />,
      services: [
        {
          title: "Computer Repair",
          description: "Hardware and software troubleshooting",
          href: "/services/computer-repair",
        },
        {
          title: "Phone Repair",
          description: "Mobile device repair and maintenance",
          href: "/services/phone-repair",
        },
        {
          title: "Web Development",
          description: "Website development and UI/UX design",
          href: "/services/web-development",
        },
        {
          title: "Digital Marketing",
          description: "SEO, social media, and digital marketing services",
          href: "/services/digital-marketing",
        },
        {
          title: "Cybersecurity",
          description: "Security solutions and ethical hacking services",
          href: "/services/cybersecurity",
        },
      ],
    },
    {
      id: "creative",
      name: "Creative",
      icon: <Palette className="h-5 w-5" />,
      services: [
        {
          title: "Graphic Design",
          description: "Professional graphic design and branding",
          href: "/services/graphic-design",
        },
        {
          title: "Photography",
          description: "Photography and photo editing services",
          href: "/services/photography",
        },
        {
          title: "Video Production",
          description: "Video editing and animation services",
          href: "/services/video-production",
        },
        {
          title: "Interior Design",
          description: "Interior decoration and space planning",
          href: "/services/interior-design",
        },
        {
          title: "Fashion Design",
          description: "Custom clothing and tailoring services",
          href: "/services/fashion-design",
        },
      ],
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="h-5 w-5" />,
      services: [
        {
          title: "Auto Repair",
          description: "Mechanical repairs and maintenance",
          href: "/services/auto-repair",
        },
        {
          title: "Auto Body Work",
          description: "Body repairs and paint work",
          href: "/services/auto-body",
        },
        {
          title: "Welding Services",
          description: "Metal fabrication and welding work",
          href: "/services/welding",
        },
        {
          title: "Heavy Equipment",
          description: "Heavy equipment operation and maintenance",
          href: "/services/heavy-equipment",
        },
      ],
    },
    {
      id: "wellness",
      name: "Wellness",
      icon: <Heart className="h-5 w-5" />,
      services: [
        {
          title: "Massage Therapy",
          description: "Professional massage and reflexology",
          href: "/services/massage",
        },
        {
          title: "Fitness Training",
          description: "Personal training and fitness coaching",
          href: "/services/fitness",
        },
        {
          title: "Hair & Beauty",
          description: "Hairdressing, barbering, and nail services",
          href: "/services/beauty",
        },
        {
          title: "Physiotherapy",
          description: "Physical therapy and rehabilitation",
          href: "/services/physiotherapy",
        },
      ],
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: <Utensils className="h-5 w-5" />,
      services: [
        {
          title: "Catering",
          description: "Professional cooking and catering services",
          href: "/services/catering",
        },
        {
          title: "Event Planning",
          description: "Event organization and decoration",
          href: "/services/event-planning",
        },
        {
          title: "Housekeeping",
          description: "Professional cleaning and housekeeping",
          href: "/services/housekeeping",
        },
        {
          title: "Childcare",
          description: "Professional childcare and nanny services",
          href: "/services/childcare",
        },
      ],
    },
    {
      id: "security",
      name: "Security",
      icon: <Shield className="h-5 w-5" />,
      services: [
        {
          title: "Private Security",
          description: "Security personnel and bodyguard services",
          href: "/services/private-security",
        },
        {
          title: "CCTV Installation",
          description: "Security camera installation and monitoring",
          href: "/services/cctv",
        },
        {
          title: "Locksmith",
          description: "Locksmithing and key cutting services",
          href: "/services/locksmith",
        },
      ],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find the Right Service</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse our wide range of professional services or search for what you need
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search for services..." className="w-full bg-background pl-8 pr-4" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="home" className="mt-12">
        <TabsList className="flex w-full flex-wrap justify-start gap-2 md:justify-center">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
              {category.icon}
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {category.services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={service.href} className="w-full">
                      <Button variant="outline" className="w-full justify-between">
                        View Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
