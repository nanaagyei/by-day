"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Star, Wallet } from "lucide-react"
import NearbyServicesMap from "@/components/nearby-services-map"
import Link from "next/link"

export default function ClientDashboard() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your services and bookings</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              View Map
            </Button>
            <Button>
              <Clock className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </div>
        </div>

        <Tabs defaultValue="book" className="space-y-4">
          <TabsList>
            <TabsTrigger value="book">Book a Service</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
            <TabsTrigger value="history">Booking History</TabsTrigger>
          </TabsList>

          <TabsContent value="book" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quick Booking</h3>
                  <p className="text-sm text-muted-foreground">
                    Book a service instantly and get connected with a professional right away
                  </p>
                  <Button className="w-full">
                    <Clock className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Schedule for Later</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a service for a specific date and time that works for you
                  </p>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Find Nearby Services</h3>
                </div>
                <NearbyServicesMap />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Plumbing Repair</CardTitle>
                    <CardDescription>Scheduled for Today, 2:00 PM</CardDescription>
                  </div>
                  <Badge>Confirmed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=JD" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                        4.8 (120 reviews)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>123 Main St, Apt 4B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Estimated duration: 1-2 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                      <span>$85 - $120 (final price after service)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Contact Professional</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>House Cleaning</CardTitle>
                    <CardDescription>Scheduled for Tomorrow, 10:00 AM</CardDescription>
                  </div>
                  <Badge>Confirmed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=MJ" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Maria Johnson</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                        4.9 (87 reviews)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>123 Main St, Apt 4B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Estimated duration: 3 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                      <span>$120 (fixed price)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Contact Professional</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Electrical Repair</CardTitle>
                    <CardDescription>Completed on April 15, 2023</CardDescription>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=RJ" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Robert Jackson</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                        4.7 (56 reviews)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>123 Main St, Apt 4B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Duration: 1.5 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                      <span>$95 (final price)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Book Again</Button>
                <Link href="/services/electrical">
                  <Button>Leave Review</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 