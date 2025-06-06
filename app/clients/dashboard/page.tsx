"use client"

import { ProtectedRoute } from "@/components/protected-route"
import ClientDashboard from "@/components/client-dashboard"

export default function DashboardPage() {
  return (
    <ProtectedRoute requiredUserType="client">
      <ClientDashboard />
    </ProtectedRoute>
  )
}
