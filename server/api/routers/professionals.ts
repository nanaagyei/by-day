import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc"

export const professionalsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          serviceId: z.string().optional(),
          location: z.string().optional(),
        })
        .optional(),
    )
    .query(({ input }) => {
      // This would normally fetch from a database
      const professionals = [
        {
          id: "101",
          name: "John Doe",
          services: ["1", "2"], // Plumbing, Electrical
          rating: 4.8,
          reviewCount: 120,
          hourlyRate: 45,
          location: {
            lat: 40.7128,
            lng: -74.006,
          },
        },
        {
          id: "102",
          name: "Maria Johnson",
          services: ["3"], // House Cleaning
          rating: 4.9,
          reviewCount: 87,
          hourlyRate: 40,
          location: {
            lat: 40.7128,
            lng: -74.006,
          },
        },
        {
          id: "103",
          name: "Robert Jackson",
          services: ["2"], // Electrical
          rating: 4.7,
          reviewCount: 56,
          hourlyRate: 50,
          location: {
            lat: 40.7128,
            lng: -74.006,
          },
        },
      ]

      if (input?.serviceId) {
        return professionals.filter((p) => p.services.includes(input.serviceId))
      }

      return professionals
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => {
    // This would normally fetch from a database
    return {
      id: input.id,
      name: "John Doe",
      services: ["1", "2"], // Plumbing, Electrical
      rating: 4.8,
      reviewCount: 120,
      hourlyRate: 45,
      bio: "Professional plumber with over 10 years of experience in residential and commercial plumbing.",
      location: {
        lat: 40.7128,
        lng: -74.006,
      },
    }
  }),

  register: protectedProcedure
    .input(
      z.object({
        fullName: z.string(),
        email: z.string().email(),
        phone: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string(),
        serviceCategory: z.string(),
        bio: z.string(),
        experience: z.string(),
        hourlyRate: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      // This would normally create in a database
      return {
        id: "new-professional-id",
        ...input,
        userId: ctx.auth.userId,
        status: "pending_verification",
        createdAt: new Date().toISOString(),
      }
    }),
})
