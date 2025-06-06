import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = await auth();
  const user = await currentUser();

  // If no user is authenticated, return info about that
  if (!userId || !user) {
    return NextResponse.json({
      authenticated: false,
      message: "User is not authenticated",
      requestUrl: request.url,
      nextUrl: request.nextUrl.toString(),
    });
  }

  // Return user info for debugging
  return NextResponse.json({
    authenticated: true,
    userId,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      publicMetadata: user.publicMetadata,
    },
    requestUrl: request.url,
    nextUrl: request.nextUrl.toString(),
  });
} 