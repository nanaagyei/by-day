"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

type UserType = "client" | "professional" | null
type AuthContextType = {
  userType: UserType
  setUserType: (type: UserType) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser()
  const [userType, setUserType] = useState<UserType>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isLoaded) return

    // If user is not signed in, reset user type
    if (!isSignedIn) {
      setUserType(null)
      setIsLoading(false)
      return
    }

    // Try to get user type from localStorage
    const storedUserType = localStorage.getItem("userType") as UserType
    if (storedUserType) {
      setUserType(storedUserType)
    }
    
    setIsLoading(false)
  }, [isLoaded, isSignedIn])

  const handleSetUserType = (type: UserType) => {
    setUserType(type)
    if (type) {
      localStorage.setItem("userType", type)
    } else {
      localStorage.removeItem("userType")
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userType,
        setUserType: handleSetUserType,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 