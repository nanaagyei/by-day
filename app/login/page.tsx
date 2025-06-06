"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

function LoginRedirectComponent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "professional") {
      router.push("/sign-in?type=professional")
    } else {
      router.push("/sign-in")
    }
  }, [router, searchParams])

  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Redirecting to sign-in page...</p>
      </div>
    </div>
  )
}

export default function LoginRedirect() {
  return (
    <Suspense fallback={
      <div className="container flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <LoginRedirectComponent />
    </Suspense>
  )
} 