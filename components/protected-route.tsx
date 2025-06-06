"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useUser, useAuth } from "@clerk/nextjs"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredUserType?: "client" | "professional"
  redirectTo?: string
}

export function ProtectedRoute({
  children,
  requiredUserType,
  redirectTo = "/sign-in",
}: ProtectedRouteProps) {
  const { isLoaded, isSignedIn, user } = useUser()
  const { isLoaded: isAuthLoaded } = useAuth()
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // Wait for Clerk to load
    if (!isLoaded || !isAuthLoaded) return

    // If not signed in, redirect to login
    if (!isSignedIn) {
      router.push(redirectTo)
      return
    }

    // If a specific user type is required, check the user's metadata
    if (requiredUserType) {
      const userType = user?.publicMetadata?.userType as string

      if (userType !== requiredUserType) {
        if (requiredUserType === "professional") {
          router.push("/sign-in?type=professional")
        } else {
          router.push("/sign-in")
        }
        return
      }
    }

    // If we reach here, user is authorized
    setIsAuthorized(true)
  }, [isSignedIn, isLoaded, isAuthLoaded, user, requiredUserType, redirectTo, router])

  // Show loading state while checking authentication
  if (!isLoaded || !isAuthLoaded || !isSignedIn || !isAuthorized) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 