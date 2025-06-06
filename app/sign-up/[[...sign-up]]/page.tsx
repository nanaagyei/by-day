"use client"

import { SignUp } from "@clerk/nextjs"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect, useMemo } from "react"
import { Briefcase, User, Loader2 } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

export default function SignUpPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get initial type from URL or localStorage (for persistence during multi-step flows)
  const getInitialType = () => {
    if (typeof window !== 'undefined') {
      const urlType = searchParams.get("type")
      const storedType = localStorage.getItem('byday-user-type')
      return urlType === "professional" || storedType === "professional" ? "professional" : "client"
    }
    return "client"
  }
  
  const [userType, setUserType] = useState<"client" | "professional">(getInitialType)
  const [mounted, setMounted] = useState(false)
  
  // Handle mounting and URL parameter reading
  useEffect(() => {
    const type = getInitialType()
    setUserType(type)
    // Store in localStorage for persistence
    localStorage.setItem('byday-user-type', type)
    setMounted(true)
  }, [searchParams])
  
  // Handler for tab change that updates the URL and localStorage
  const handleTypeChange = (value: string) => {
    setUserType(value as "client" | "professional")
    // Store in localStorage for persistence
    localStorage.setItem('byday-user-type', value)
    // Update URL to include the type
    const url = new URL(window.location.href)
    if (value === "professional") {
      url.searchParams.set("type", "professional")
    } else {
      url.searchParams.delete("type")
    }
    // Replace state without full navigation
    window.history.replaceState({}, "", url.toString())
  }

  // Use afterSignUpUrl to redirect to a setup page where we'll set the user type
  const afterSignUpUrl = `/setup-profile?type=${userType}`

  // Don't render anything until mounted (prevents SSR mismatch and bouncing)
  if (!mounted) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[80vh]">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <h2 className="text-xl font-semibold">Join ByDay</h2>
          <p className="text-muted-foreground">Setting up your registration...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 md:px-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create your ByDay account</h1>
        
        <Tabs value={userType} onValueChange={handleTypeChange} className="w-full mb-6">
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
        
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-primary hover:bg-primary/90',
              footerAction: 'text-primary',
              card: 'shadow-md',
              logoImage: 'hidden',
              logoBox: 'hidden',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
              socialButtonsBlockButton: 'border-gray-300 text-gray-600 hover:bg-gray-50',
              formFieldLabel: 'text-sm font-medium text-gray-700',
              formFieldInput: 'w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary/30 focus:border-primary/60 focus:outline-none',
              alert: 'bg-red-50 text-red-600 border border-red-100 p-2 rounded-md',
            },
            layout: {
              socialButtonsVariant: 'iconButton',
              showOptionalFields: false,
            },
          }}
          routing="path"
          path="/sign-up"
          forceRedirectUrl={afterSignUpUrl}
          signInUrl={userType === "professional" ? "/sign-in?type=professional" : "/sign-in"}
          unsafeMetadata={{
            intendedUserType: userType
          }}
        />
      </div>
    </div>
  )
}