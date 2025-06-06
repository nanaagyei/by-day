import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const servicesRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // This would normally fetch from a database
    return [
      {
        id: "1",
        name: "Plumbing",
        description: "Professional plumbing services",
        category: "home-maintenance",
      },
      {
        id: "2",
        name: "Electrical",
        description: "Electrical repairs and installations",
        category: "home-maintenance",
      },
      {
        id: "3",
        name: "House Cleaning",
        description: "Professional house cleaning services",
        category: "cleaning",
      },
    ]
  }),

  getByCategory: publicProcedure.input(z.object({ category: z.string() })).query(({ input }) => {
    // This would normally filter from a database
    const services = [
      {
        id: "1",
        name: "Plumbing",
        description: "Professional plumbing services",
        category: "home-maintenance",
      },
      {
        id: "2",
        name: "Electrical",
        description: "Electrical repairs and installations",
        category: "home-maintenance",
      },
      {
        id: "3",
        name: "House Cleaning",
        description: "Professional house cleaning services",
        category: "cleaning",
      },
    ]

    return services.filter((service) => service.category === input.category)
  }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => {
    // This would normally fetch from a database
    return {
      id: input.id,
      name: "Plumbing",
      description: "Professional plumbing services",
      category: "home-maintenance",
      price: {
        min: 50,
        max: 200,
      },
      duration: {
        min: 1,
        max: 3,
      },
    }
  }),
})
