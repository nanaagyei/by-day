"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserButton, SignInButton, useClerk, useUser } from "@clerk/nextjs"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, Home, Wrench, Laptop, Palette, Car, Heart, Utensils, Shield, User as UserIcon, Briefcase, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  // Get user type from Clerk's public metadata
  const userType = user?.publicMetadata?.userType as "client" | "professional" | undefined

  const serviceCategories = [
    {
      name: "Home",
      href: "/services/home",
      icon: <Home className="h-4 w-4 mr-2" />,
      description: "Home maintenance and improvement",
    },
    {
      name: "Construction",
      href: "/services/construction",
      icon: <Wrench className="h-4 w-4 mr-2" />,
      description: "Building and renovation services",
    },
    {
      name: "Technology",
      href: "/services/tech",
      icon: <Laptop className="h-4 w-4 mr-2" />,
      description: "Digital and technical services",
    },
    {
      name: "Creative",
      href: "/services/creative",
      icon: <Palette className="h-4 w-4 mr-2" />,
      description: "Artistic and design services",
    },
    {
      name: "Automotive",
      href: "/services/automotive",
      icon: <Car className="h-4 w-4 mr-2" />,
      description: "Vehicle and equipment services",
    },
    {
      name: "Wellness",
      href: "/services/wellness",
      icon: <Heart className="h-4 w-4 mr-2" />,
      description: "Health and beauty services",
    },
    {
      name: "Hospitality",
      href: "/services/hospitality",
      icon: <Utensils className="h-4 w-4 mr-2" />,
      description: "Food and service-related services",
    },
    {
      name: "Security",
      href: "/services/security",
      icon: <Shield className="h-4 w-4 mr-2" />,
      description: "Protection and safety services",
    },
  ]

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "/about" },
  ]

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const getDashboardLink = () => {
    if (userType === "professional") {
      return "/professionals/dashboard";
    }
    return "/clients/dashboard";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-[#17494d]/90 text-primary shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#17494d]/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/by-day-icon.png"
              alt="ByDay Logo"
              className="h-10 w-auto drop-shadow-md dark:drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
            />
          </Link>
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">All Services</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Browse our comprehensive range of professional services
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {serviceCategories.map((category) => (
                        <li key={category.name}>
                          <Link href={category.href} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <div className="flex items-center">
                                {category.icon}
                                <div>
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-xs text-muted-foreground">{category.description}</div>
                                </div>
                              </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/how-it-works" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>How It Works</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {isSignedIn ? (
            <>
              <Link href={getDashboardLink()}>
                <Button variant="outline" size="sm" className="border bg-white text-primary dark:bg-yellow-400 dark:text-primary">
                  {userType === "professional" ? "Pro Dashboard" : "Dashboard"}
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                      <AvatarFallback>
                        {user?.fullName?.charAt(0) || user?.username?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={getDashboardLink()}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1 border bg-white text-primary dark:bg-yellow-400 dark:text-primary">
                    <UserIcon className="h-4 w-4" />
                    Login
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/sign-in">Client Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/sign-in?type=professional">Professional Login</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="gap-1 border bg-white text-primary dark:bg-yellow-400 dark:text-primary">
                    Join ByDay
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/sign-up">Register as Client</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/sign-up?type=professional">Register as Professional</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          <Button variant="outline" size="icon" className="md:hidden border bg-white text-primary dark:bg-yellow-400 dark:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-4">
            <div className="space-y-2">
              <div className="px-2 text-sm font-semibold text-muted-foreground">Services</div>
              {serviceCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.icon}
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="px-2 text-sm font-semibold text-muted-foreground">Navigation</div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {isSignedIn ? (
              <div className="space-y-2">
                <div className="px-2 text-sm font-semibold text-muted-foreground">Account</div>
                <Link
                  href={getDashboardLink()}
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="flex w-full items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSignOut();
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="px-2 text-sm font-semibold text-muted-foreground">Account</div>
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon className="h-4 w-4" />
                  Client Login
                </Link>
                <Link
                  href="/sign-in?type=professional"
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  Professional Login
                </Link>
                <Link
                  href="/sign-up"
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon className="h-4 w-4" />
                  Register as Client
                </Link>
                <Link
                  href="/sign-up?type=professional"
                  className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Briefcase className="h-4 w-4" />
                  Register as Professional
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

