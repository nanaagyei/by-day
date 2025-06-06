import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = await auth();
  const user = await currentUser();

  // If no user is authenticated, redirect to sign-in
  if (!userId || !user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Get the target from search params if available
  const searchParams = request.nextUrl.searchParams;
  const target = searchParams.get("target");

  // Get user type from metadata
  const userType = user.publicMetadata.userType as string;
  
  // Default redirection logic
  if (target === "dashboard") {
    // Redirect to the appropriate dashboard based on user type
    if (userType === "professional") {
      return NextResponse.redirect(new URL("/professionals/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/clients/dashboard", request.url));
    }
  }

  // Fallback to home page if no specific target
  return NextResponse.redirect(new URL("/", request.url));
} 