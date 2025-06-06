"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Star, 
  Search, 
  Filter, 
  X 
} from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"

interface ServiceProvider {
  id: string
  name: string
  service: string
  rating: number
  distance: number
  location: {
    lat: number
    lng: number
  }
  phone: string
  isAvailable: boolean
}

const containerStyle = {
  width: "100%",
  height: "100%",
}

// Accra, Ghana coordinates
const defaultCenter = {
  lat: 5.6037,
  lng: -0.1870,
}

// Mock services data with locations near Accra
const mockServices: ServiceProvider[] = [
  {
    id: "1",
    name: "Accra Plumbing",
    service: "Plumbing",
    rating: 4.8,
    distance: 0,
    location: {
      lat: 5.6137,
      lng: -0.1770,
    },
    phone: "+233201234567",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Ghana Electric",
    service: "Electrical",
    rating: 4.5,
    distance: 0,
    location: {
      lat: 5.5937,
      lng: -0.1970,
    },
    phone: "+233201234568",
    isAvailable: true,
  },
  {
    id: "3",
    name: "Accra HVAC",
    service: "HVAC",
    rating: 4.7,
    distance: 0,
    location: {
      lat: 5.6237,
      lng: -0.2070,
    },
    phone: "+233201234569",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Green Gardens",
    service: "Landscaping",
    rating: 4.9,
    distance: 0,
    location: {
      lat: 5.5837,
      lng: -0.1670,
    },
    phone: "+233201234570",
    isAvailable: false,
  },
  {
    id: "5",
    name: "Accra Painters",
    service: "Painting",
    rating: 4.6,
    distance: 0,
    location: {
      lat: 5.6437,
      lng: -0.1970,
    },
    phone: "+233201234571",
    isAvailable: true,
  },
  {
    id: "6",
    name: "Elite Carpentry",
    service: "Carpentry",
    rating: 4.9,
    distance: 0,
    location: {
      lat: 5.6337,
      lng: -0.1570,
    },
    phone: "+233201234572",
    isAvailable: true,
  },
  {
    id: "7",
    name: "Accra Roofing",
    service: "Roofing",
    rating: 4.7,
    distance: 0,
    location: {
      lat: 5.6537,
      lng: -0.2170,
    },
    phone: "+233201234573",
    isAvailable: true,
  },
  {
    id: "8",
    name: "Smart Home Ghana",
    service: "Smart Home",
    rating: 4.8,
    distance: 0,
    location: {
      lat: 5.5737,
      lng: -0.1870,
    },
    phone: "+233201234574",
    isAvailable: true,
  },
  {
    id: "9",
    name: "Eco Cleaning",
    service: "Cleaning",
    rating: 4.6,
    distance: 0,
    location: {
      lat: 5.6137,
      lng: -0.2270,
    },
    phone: "+233201234575",
    isAvailable: false,
  },
  {
    id: "10",
    name: "Premium Flooring",
    service: "Flooring",
    rating: 4.9,
    distance: 0,
    location: {
      lat: 5.5637,
      lng: -0.1570,
    },
    phone: "+233201234576",
    isAvailable: true,
  },
  {
    id: "11",
    name: "Window Masters",
    service: "Windows",
    rating: 4.7,
    distance: 0,
    location: {
      lat: 5.5437,
      lng: -0.1470,
    },
    phone: "+233201234577",
    isAvailable: true,
  },
  {
    id: "12",
    name: "Security Systems Ghana",
    service: "Security",
    rating: 4.8,
    distance: 0,
    location: {
      lat: 5.6237,
      lng: -0.1670,
    },
    phone: "+233201234578",
    isAvailable: true,
  },
  {
    id: "13",
    name: "Garden Experts",
    service: "Gardening",
    rating: 4.5,
    distance: 0,
    location: {
      lat: 5.6837,
      lng: -0.2370,
    },
    phone: "+233201234579",
    isAvailable: true,
  },
  {
    id: "14",
    name: "Pool & Spa Care",
    service: "Pool Service",
    rating: 4.6,
    distance: 0,
    location: {
      lat: 5.7037,
      lng: -0.2570,
    },
    phone: "+233201234580",
    isAvailable: false,
  },
  {
    id: "15",
    name: "Interior Design Studio",
    service: "Interior Design",
    rating: 4.9,
    distance: 0,
    location: {
      lat: 5.6037,
      lng: -0.1770,
    },
    phone: "+233201234581",
    isAvailable: true,
  }
]

// Define service categories
const serviceCategories = [
  "All",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Landscaping",
  "Painting",
  "Carpentry",
  "Roofing",
  "Smart Home",
  "Cleaning",
  "Flooring",
  "Windows",
  "Security",
  "Gardening",
  "Pool Service",
  "Interior Design"
]

export default function NearbyServicesMap() {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral>(defaultCenter)
  const [nearbyServices, setNearbyServices] = useState<ServiceProvider[]>([])
  const [filteredServices, setFilteredServices] = useState<ServiceProvider[]>([])
  const [selectedService, setSelectedService] = useState<ServiceProvider | null>(null)
  const [selectedMarker, setSelectedMarker] = useState<ServiceProvider | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [searchRadius, setSearchRadius] = useState(5)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isSliderDragging, setIsSliderDragging] = useState(false)
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  })

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3958.8 // Earth's radius in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180)
    const dLon = (lon2 - lon1) * (Math.PI / 180)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return distance
  }

  // Filter services within selected radius
  const filterNearbyServices = useCallback(
    (location: google.maps.LatLngLiteral) => {
    //   console.log("Filtering services for location:", location)
    //   console.log("Current radius:", searchRadius)
      
      const servicesWithDistance = mockServices
        .map((service) => {
          const distance = calculateDistance(
            location.lat,
            location.lng,
            service.location.lat,
            service.location.lng
          )
        //   console.log(`Service ${service.name} distance: ${distance.toFixed(2)} miles`)
          return {
            ...service,
            distance,
          }
        })
        .filter((service) => service.distance <= searchRadius)
        .sort((a, b) => a.distance - b.distance)

    //   console.log(`Found ${servicesWithDistance.length} services within ${searchRadius} miles`)
      setNearbyServices(servicesWithDistance)
      
      // Apply category filter if needed
      if (selectedCategory !== "All") {
        const filtered = servicesWithDistance.filter(
          (service) => service.service === selectedCategory
        )
        setFilteredServices(filtered)
      } else {
        setFilteredServices(servicesWithDistance)
      }
    },
    [searchRadius, selectedCategory]
  )

  // Apply category filter
  useEffect(() => {
    if (nearbyServices.length > 0) {
      if (selectedCategory === "All") {
        setFilteredServices(nearbyServices)
      } else {
        const filtered = nearbyServices.filter(
          (service) => service.service === selectedCategory
        )
        setFilteredServices(filtered)
      }
    }
  }, [selectedCategory, nearbyServices])

  // Set initial location to Accra
  useEffect(() => {
    console.log("Setting default location to Accra, Ghana")
    filterNearbyServices(defaultCenter)
    
    // Initialize geocoder
    if (isLoaded && !geocoder) {
      setGeocoder(new google.maps.Geocoder())
    }
  }, [filterNearbyServices, isLoaded, geocoder])

  const onLoad = useCallback((map: google.maps.Map) => {
    // console.log("Map loaded")
    setMap(map)
    map.setCenter(userLocation)
  }, [userLocation])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleRadiusChange = (value: number[]) => {
    const newRadius = value[0]
    // console.log("Radius changed to:", newRadius)
    setSearchRadius(newRadius)
    
    // Set a flag to indicate slider is being dragged
    if (!isSliderDragging) {
      setIsSliderDragging(true)
    }
    
    // When slider is released, update services
    filterNearbyServices(userLocation)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!searchQuery.trim() || !geocoder) return
    
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        }
        console.log("Search location found:", location)
        setUserLocation(location)
        if (map) {
          map.setCenter(location)
        }
        filterNearbyServices(location)
      } else {
        console.error("Geocode was not successful for the following reason:", status)
        alert("Location not found. Please try a different search.")
      }
    })
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  if (!isLoaded) {
    return (
      <div className="flex h-[600px] items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    )
  }

  const servicesToDisplay = filteredServices

  return (
    <div className="grid h-[600px] grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Map Container */}
      <div className="col-span-2 overflow-hidden rounded-lg border bg-background relative">
        <div className="absolute right-4 top-4 z-10 w-80">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for a location..."
                className="pl-9 pr-4 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button type="submit" size="sm" className="shrink-0">
              Search
            </Button>
          </form>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            mapTypeControl: false,
            zoomControl: true,
            streetViewControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker 
            position={userLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
          {servicesToDisplay.map((service) => (
            <Marker
              key={service.id}
              position={service.location}
              onClick={() => setSelectedMarker(service)}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div className="p-2">
                <h3 className="font-semibold">{selectedMarker.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedMarker.service}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{selectedMarker.rating}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm">{selectedMarker.distance.toFixed(1)} miles</span>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      {/* Nearby Services List */}
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Find Nearby Services</h3>
                <span className="text-sm text-muted-foreground">
                Within {searchRadius} miles
                </span>
            </div>
          
            <div className="space-y-4">
            {/* Radius Slider */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Search Radius</span>
                    <span className="text-sm text-muted-foreground">{searchRadius} miles</span>
                </div>
                <Slider
                    defaultValue={[searchRadius]}
                    max={20}
                    min={1}
                    step={1}
                    onValueChange={handleRadiusChange}
                    onValueCommit={(value) => {
                    setIsSliderDragging(false)
                    filterNearbyServices(userLocation)
                    }}
                />
            </div>
            
            {/* Category Filter */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by Category</span>
              </div>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {servicesToDisplay.length === 0 ? (
            <p className="text-center text-muted-foreground">No services found nearby</p>
          ) : (
            servicesToDisplay.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer p-4 transition-colors hover:bg-muted/50 ${
                  selectedService?.id === service.id ? "border-primary" : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.service}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{service.rating}</span>
                      <span className="text-muted-foreground">•</span>
                      <MapPin className="h-4 w-4" />
                      <span>{service.distance.toFixed(1)} miles</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={service.isAvailable ? "default" : "secondary"}
                    disabled={!service.isAvailable}
                  >
                    {service.isAvailable ? "Book Now" : "Unavailable"}
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selectedService.name}</h3>
                  <p className="text-muted-foreground">{selectedService.service}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedService(null)}>
                  ×
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{selectedService.rating}</span>
                <span className="text-muted-foreground">•</span>
                <MapPin className="h-4 w-4" />
                <span>{selectedService.distance.toFixed(1)} miles away</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{selectedService.phone}</span>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
                <Button className="flex-1" disabled={!selectedService.isAvailable}>
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
} 