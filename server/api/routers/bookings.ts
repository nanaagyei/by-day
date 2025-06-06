import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc"

export const bookingsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    // This would normally fetch from a database
    return [
      {
        id: "1",
        serviceId: "1",
        serviceName: "Plumbing",
        professionalId: "101",
        professionalName: "John Doe",
        status: "confirmed",
        scheduledFor: new Date().toISOString(),
        location: "123 Main St, Apt 4B",
        price: 85,
        userId: ctx.auth.userId,
      },
      {
        id: "2",
        serviceId: "3",
        serviceName: "House Cleaning",
        professionalId: "102",
        professionalName: "Maria Johnson",
        status: "confirmed",
        scheduledFor: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        location: "123 Main St, Apt 4B",
        price: 120,
        userId: ctx.auth.userId,
      },
    ]
  }),

  getById: protectedProcedure.input(z.object({ id: z.string() })).query(({ input, ctx }) => {
    // This would normally fetch from a database
    return {
      id: input.id,
      serviceId: "1",
      serviceName: "Plumbing",
      professionalId: "101",
      professionalName: "John Doe",
      status: "confirmed",
      scheduledFor: new Date().toISOString(),
      location: "123 Main St, Apt 4B",
      price: 85,
      userId: ctx.auth.userId,
    }
  }),

  create: protectedProcedure
    .input(
      z.object({
        serviceId: z.string(),
        professionalId: z.string(),
        scheduledFor: z.string(),
        location: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      // This would normally create in a database
      return {
        id: "new-booking-id",
        ...input,
        userId: ctx.auth.userId,
        status: "pending",
        createdAt: new Date().toISOString(),
      }
    }),

  cancel: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ input }) => {
    // This would normally update in a database
    return {
      id: input.id,
      status: "cancelled",
      cancelledAt: new Date().toISOString(),
    }
  }),
})
