"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Star, Wallet, MessageCircle, Users, BriefcaseBusiness, Plus } from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ProfessionalDashboard() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  // Mock data for professional's services
  const services = [
    {
      id: "1",
      name: "Basic Plumbing",
      category: "Plumbing",
      price: "$50-80/hr",
      active: true,
      bookings: 12,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Pipe Replacement",
      category: "Plumbing",
      price: "$120-200",
      active: true,
      bookings: 8,
      rating: 4.7,
    },
    {
      id: "3",
      name: "Water Heater Install",
      category: "Plumbing",
      price: "$250-400",
      active: false,
      bookings: 4,
      rating: 4.9,
    },
  ]

  // Mock data for bookings
  const bookings = [
    {
      id: "1",
      service: "Basic Plumbing",
      client: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
        initials: "JS",
      },
      date: "Today, 2:00 PM",
      address: "456 Park Ave, Apt 7C",
      status: "Confirmed",
    },
    {
      id: "2",
      service: "Pipe Replacement",
      client: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40&text=MB",
        initials: "MB",
      },
      date: "Tomorrow, 10:00 AM",
      address: "789 Broadway, Suite 5",
      status: "Pending",
    },
    {
      id: "3",
      service: "Basic Plumbing",
      client: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
        initials: "SJ",
      },
      date: "May 5, 1:30 PM",
      address: "123 Main St, Apt 4B",
      status: "Completed",
    },
  ]

  // Mock data for client chats
  const chats = [
    {
      id: "1",
      client: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
        initials: "JS",
      },
      lastMessage: "Hi, I was wondering if you're available tomorrow for a pipe repair?",
      time: "10:23 AM",
      unread: true,
    },
    {
      id: "2",
      client: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40&text=MB",
        initials: "MB",
      },
      lastMessage: "Thanks for confirming. I'll see you then!",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "3",
      client: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
        initials: "SJ",
      },
      lastMessage: "The sink is working perfectly now, thank you!",
      time: "Apr 30",
      unread: false,
    },
  ]

  // Mock chat messages for selected chat
  const selectedChatMessages = [
    {
      id: "1",
      sender: "client",
      text: "Hi, I was wondering if you're available tomorrow for a pipe repair?",
      time: "10:23 AM",
    },
    {
      id: "2",
      sender: "professional",
      text: "Hello! Yes, I have availability tomorrow afternoon. What time works for you?",
      time: "10:25 AM",
    },
    {
      id: "3",
      sender: "client",
      text: "Would 2 PM work? It's a leaking pipe under the kitchen sink.",
      time: "10:28 AM",
    },
    {
      id: "4",
      sender: "professional",
      text: "2 PM works for me. I'll bring my tools for a pipe repair. Can you send me your address?",
      time: "10:30 AM",
    },
    {
      id: "5",
      sender: "client",
      text: "Great! It's 456 Park Ave, Apt 7C. How much do you estimate it will cost?",
      time: "10:32 AM",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Professional Dashboard</h1>
            <p className="text-muted-foreground">Manage your services, bookings, and client communications</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              View Service Area
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Service
            </Button>
          </div>
        </div>

        <Tabs defaultValue="services" className="space-y-4">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="services">
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              My Services
            </TabsTrigger>
            <TabsTrigger value="bookings">
              <Calendar className="mr-2 h-4 w-4" />
              Bookings
            </TabsTrigger>
            <TabsTrigger value="messages">
              <MessageCircle className="mr-2 h-4 w-4" />
              Client Messages
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Services</CardTitle>
                    <CardDescription>Manage your service offerings and availability</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Service
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>{service.category}</TableCell>
                        <TableCell>{service.price}</TableCell>
                        <TableCell>
                          <Badge variant={service.active ? "default" : "secondary"}>
                            {service.active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>{service.bookings}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{service.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Area</CardTitle>
                <CardDescription>Set your service area and travel radius</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Primary Location</Label>
                      <Input id="location" placeholder="Enter your location" defaultValue="Accra, Ghana" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="radius">Service Radius</Label>
                      <Select defaultValue="10">
                        <SelectTrigger id="radius">
                          <SelectValue placeholder="Select radius" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 miles</SelectItem>
                          <SelectItem value="10">10 miles</SelectItem>
                          <SelectItem value="15">15 miles</SelectItem>
                          <SelectItem value="20">20 miles</SelectItem>
                          <SelectItem value="25">25 miles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button>Update Service Area</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>Manage your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>{booking.service}</CardTitle>
                            <CardDescription>{booking.date}</CardDescription>
                          </div>
                          <Badge 
                            variant={
                              booking.status === "Confirmed" 
                                ? "default" 
                                : booking.status === "Pending" 
                                  ? "secondary" 
                                  : "outline"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={booking.client.avatar} />
                            <AvatarFallback>{booking.client.initials}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{booking.client.name}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{booking.address}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {booking.status === "Pending" && (
                              <>
                                <Button variant="outline" size="sm">Decline</Button>
                                <Button size="sm">Accept</Button>
                              </>
                            )}
                            {booking.status === "Confirmed" && (
                              <>
                                <Button variant="outline" size="sm">Cancel</Button>
                                <Button 
                                  size="sm"
                                  onClick={() => setSelectedChat("1")}
                                >
                                  Message
                                </Button>
                              </>
                            )}
                            {booking.status === "Completed" && (
                              <Button size="sm" variant="outline">View Details</Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <Card className="overflow-hidden">
              <div className="grid h-[600px] grid-cols-1 md:grid-cols-3">
                {/* Chat List */}
                <div className="border-r">
                  <div className="border-b p-4">
                    <h3 className="text-lg font-semibold">Client Messages</h3>
                    <p className="text-sm text-muted-foreground">
                      Communicate with your clients
                    </p>
                  </div>
                  <div className="overflow-y-auto">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`cursor-pointer border-b p-4 transition-colors hover:bg-muted/50 ${
                          selectedChat === chat.id ? "bg-muted" : ""
                        }`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={chat.client.avatar} />
                              <AvatarFallback>{chat.client.initials}</AvatarFallback>
                            </Avatar>
                            {chat.unread && (
                              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{chat.client.name}</p>
                              <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className="truncate text-sm text-muted-foreground">
                              {chat.lastMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex flex-col justify-between md:col-span-2">
                  {!selectedChat ? (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">Select a conversation</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose a client to view your conversation
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="border-b p-4">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40&text=JS" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Jane Smith</p>
                            <p className="text-xs text-muted-foreground">
                              Basic Plumbing • Today, 2:00 PM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {selectedChatMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${
                              message.sender === "professional" ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`rounded-lg px-4 py-2 max-w-[75%] ${
                                message.sender === "professional"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted"
                              }`}
                            >
                              <p>{message.text}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === "professional"
                                  ? "text-primary-foreground/70"
                                  : "text-muted-foreground"
                              }`}>
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t p-4">
                        <form className="flex gap-2">
                          <Input 
                            className="flex-1" 
                            placeholder="Type your message..." 
                          />
                          <Button type="submit">Send</Button>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 