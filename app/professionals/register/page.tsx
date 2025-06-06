"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfessionalRegisterRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/sign-up?type=professional")
  }, [router])

  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Redirecting to professional sign-up page...</p>
      </div>
    </div>
  )
}
