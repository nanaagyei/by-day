"use client"

import { ProtectedRoute } from "@/components/protected-route"
import ProfessionalDashboardContent from "@/components/professional-dashboard"

export default function ProfessionalDashboardPage() {
  return (
    <ProtectedRoute requiredUserType="professional">
      <ProfessionalDashboardContent />
    </ProtectedRoute>
  )
} 