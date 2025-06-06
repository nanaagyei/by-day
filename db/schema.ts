// This file defines the database schema for the ByDay application
// It will be used when we implement the actual database integration

import { z } from "zod"

// User schemas
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["client", "professional"]),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type User = z.infer<typeof userSchema>

// Client-specific schema
export const clientSchema = z.object({
  id: z.string(),
  userId: z.string(),
  address: z.string().optional(),
  phone: z.string().optional(),
  preferences: z.record(z.string()).optional(),
})

export type Client = z.infer<typeof clientSchema>

// Professional-specific schema
export const professionalSchema = z.object({
  id: z.string(),
  userId: z.string(),
  businessName: z.string().optional(),
  description: z.string().optional(),
  categories: z.array(z.string()),
  serviceRadius: z.number(),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string(),
  }),
  verified: z.boolean().default(false),
  rating: z.number().min(0).max(5).optional(),
  totalReviews: z.number().default(0),
  availability: z.array(
    z.object({
      day: z.enum(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]),
      startTime: z.string(),
      endTime: z.string(),
    })
  ).optional(),
})

export type Professional = z.infer<typeof professionalSchema>

// Service schema
export const serviceSchema = z.object({
  id: z.string(),
  professionalId: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  subcategory: z.string().optional(),
  pricing: z.union([
    z.object({ type: z.literal("fixed"), price: z.number() }),
    z.object({ type: z.literal("hourly"), price: z.number() }),
    z.object({ type: z.literal("range"), minPrice: z.number(), maxPrice: z.number() }),
  ]),
  duration: z.number().optional(), // in minutes
  active: z.boolean().default(true),
})

export type Service = z.infer<typeof serviceSchema>

// Booking schema
export const bookingSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  professionalId: z.string(),
  serviceId: z.string(),
  status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
  scheduledAt: z.date(),
  duration: z.number(), // in minutes
  location: z.object({
    address: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
  price: z.number().optional(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Booking = z.infer<typeof bookingSchema>

// Review schema
export const reviewSchema = z.object({
  id: z.string(),
  bookingId: z.string(),
  clientId: z.string(),
  professionalId: z.string(),
  serviceId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  createdAt: z.date(),
})

export type Review = z.infer<typeof reviewSchema>

// Chat schema
export const messageSchema = z.object({
  id: z.string(),
  conversationId: z.string(),
  senderId: z.string(),
  content: z.string(),
  read: z.boolean().default(false),
  createdAt: z.date(),
})

export type Message = z.infer<typeof messageSchema>

export const conversationSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  professionalId: z.string(),
  bookingId: z.string().optional(),
  lastMessageAt: z.date(),
  messages: z.array(messageSchema).optional(),
})

export type Conversation = z.infer<typeof conversationSchema>

// This file will be expanded when implementing the actual database
// It could include functions to interact with the database, such as:
// - createUser, getUserById, updateUser, etc.
// - createService, getServicesByProfessional, etc.
// - createBooking, getBookingsByClient, etc. 