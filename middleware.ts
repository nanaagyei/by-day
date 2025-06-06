import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const publicRoutes = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/login(.*)",
  "/register(.*)",
  "/professionals/register(.*)",
  "/about",
  "/how-it-works",
  "/services(.*)",
  "/api(.*)",
  "/redirect(.*)",
]);

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/clients/dashboard(.*)",
  "/professionals/dashboard(.*)"
]);

// Type definition for session claims
interface SessionClaims {
  metadata?: {
    userType?: "client" | "professional";
  };
}

// This protects all routes with Clerk authentication
export default clerkMiddleware(async (auth, req) => {
  // Check if the route is public
  if (publicRoutes(req)) {
    return NextResponse.next();
  }

  // If the user is trying to access a protected route
  if (isProtectedRoute(req)) {
    // Use auth.protect() to handle authentication
    await auth.protect();
    
    // After authentication, check user type for correct dashboard access
    const { sessionClaims } = await auth();
    const userType = (sessionClaims as SessionClaims)?.metadata?.userType;
    
    // If accessing client dashboard but is a professional
    if (req.nextUrl.pathname.startsWith("/clients/dashboard") && userType === "professional") {
      return NextResponse.redirect(new URL("/professionals/dashboard", req.url));
    }
    
    // If accessing professional dashboard but is a client
    if (req.nextUrl.pathname.startsWith("/professionals/dashboard") && userType === "client") {
      return NextResponse.redirect(new URL("/clients/dashboard", req.url));
    }
  }

  // If the user is authenticated and trying to access sign-in/sign-up pages, redirect to dashboard
  const { userId, sessionClaims } = await auth();
  
  if (userId && (
    req.nextUrl.pathname.startsWith("/sign-in") || 
    req.nextUrl.pathname.startsWith("/sign-up") ||
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register")
  )) {
    // Check user type from session claims metadata
    const userType = (sessionClaims as SessionClaims)?.metadata?.userType;
    
    // Redirect based on user type
    if (userType === "professional") {
      return NextResponse.redirect(new URL("/professionals/dashboard", req.url));
    } else {
      // Default to client dashboard
      return NextResponse.redirect(new URL("/clients/dashboard", req.url));
   }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
