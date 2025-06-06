"use client"

import { useUser } from "@clerk/nextjs"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, User, Loader2 } from "lucide-react"

export default function SetupProfilePage() {
  const { user, isLoaded } = useUser()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [userType, setUserType] = useState<"client" | "professional">("client")
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (isLoaded && user) {
      // Get type from URL parameter first
      const typeFromUrl = searchParams.get("type")
      // Or from unsafeMetadata as fallback
      const typeFromMetadata = user.unsafeMetadata?.intendedUserType as string
      // Or from localStorage as final fallback
      const typeFromStorage = typeof window !== 'undefined' ? localStorage.getItem('byday-user-type') : null
      
      const selectedType = typeFromUrl || typeFromMetadata || typeFromStorage
      
      if (selectedType === "professional") {
        setUserType("professional")
      } else {
        setUserType("client")
      }
    }
  }, [isLoaded, user, searchParams])

  const handleSetUserType = async () => {
    if (!user) return
    
    setIsUpdating(true)
    setError("")
    
    try {
      // Call backend API to set public metadata
      const response = await fetch('/api/set-user-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          userType: userType
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to update user metadata')
      }
      
      // Clear localStorage after successful setup
      if (typeof window !== 'undefined') {
        localStorage.removeItem('byday-user-type')
      }
      
      // Redirect to appropriate dashboard
      const dashboardPath = userType === "professional" ? "/professionals/dashboard" : "/clients/dashboard"
      router.push(dashboardPath)
      
    } catch (error) {
      console.error("Setup page - Error updating user type:", error)
      setError("Failed to update user type. Please try again.")
      setIsUpdating(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4">Loading...</p>
      </div>
    )
  }

  if (!user) {
    router.push("/sign-in")
    return null
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 md:px-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Complete Your Profile</h1>
        <p className="text-center text-muted-foreground mb-6">
          Please confirm your account type to get started with ByDay.
        </p>
        
        <Tabs value={userType} onValueChange={(value) => setUserType(value as "client" | "professional")} className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">
              <User className="mr-2 h-4 w-4" />
              Client
            </TabsTrigger>
            <TabsTrigger value="professional">
              <Briefcase className="mr-2 h-4 w-4" />
              Professional
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
            {error}
          </div>
        )}
        
        <Button 
          onClick={handleSetUserType} 
          disabled={isUpdating} 
          className="w-full"
        >
          {isUpdating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Setting up your account...
            </>
          ) : (
            `Continue as ${userType === "professional" ? "Professional" : "Client"}`
          )}
        </Button>
      </div>
    </div>
  )
} 