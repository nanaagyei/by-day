import { auth } from "@clerk/nextjs/server"
import { TRPCError, initTRPC } from "@trpc/server"

interface CreateContextOptions {
  headers: Headers
}

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    headers: opts.headers,
    auth: auth(),
  }
}

export const createTRPCContext = (opts: { req: Request }) => {
  return createInnerTRPCContext({
    headers: opts.req.headers,
  })
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  errorFormatter({ shape }) {
    return shape
  },
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }
  return next({
    ctx: {
      auth: ctx.auth,
    },
  })
})

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)
