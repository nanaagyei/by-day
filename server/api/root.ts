import { createTRPCRouter } from "@/server/api/trpc"
import { servicesRouter } from "@/server/api/routers/services"
import { bookingsRouter } from "@/server/api/routers/bookings"
import { professionalsRouter } from "@/server/api/routers/professionals"

export const appRouter = createTRPCRouter({
  services: servicesRouter,
  bookings: bookingsRouter,
  professionals: professionalsRouter,
})

export type AppRouter = typeof appRouter
