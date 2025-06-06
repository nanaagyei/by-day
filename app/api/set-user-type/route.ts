import { auth, currentUser, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = await auth();
  const user = await currentUser();

  // If no user is authenticated, redirect to sign-in
  if (!userId || !user) {
    console.log("API - No authenticated user found, redirecting to /sign-in");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Log full URL for debugging
  console.log(`API - Full request URL: ${request.url}`);
  console.log(`API - Search params: ${request.nextUrl.searchParams.toString()}`);

  // Get the user type from the search params
  const searchParams = request.nextUrl.searchParams;
  
  // Check for explicitly provided type in the URL
  let type = searchParams.get("type");
  
  console.log(`API - Raw type from URL: '${type}'`);
  console.log(`API - All search params:`, Object.fromEntries(searchParams.entries()));
  
  // Validate the type parameter
  if (type) {
    // Normalize to lowercase and trim
    const originalType = type;
    type = type.toLowerCase().trim();
    
    console.log(`API - Original type: '${originalType}', normalized: '${type}'`);
    
    // Strict validation for allowed values
    if (type === "professional") {
      type = "professional";
      console.log("API - Confirmed professional type from URL");
    } else if (type === "client") {
      type = "client";
      console.log("API - Confirmed client type from URL");
    } else {
      console.log(`API - Invalid type value: '${type}', defaulting to client`);
      type = "client";
    }
  } else {
    // If no type is provided in URL, try to get it from user metadata
    type = user.publicMetadata.userType as string;
    console.log(`API - No type in URL, got type from metadata: ${type}`);
    
    // If still no valid type, default to client
    if (type !== "client" && type !== "professional") {
      console.log(`API - Invalid metadata type: '${type}', defaulting to client`);
      type = "client";
    }
  }

  try {
    // In Next.js, you need to initialize the client first
    const client = await clerkClient();
    
    console.log(`API - Updating user ${userId} metadata with userType: '${type}'`);
    
    // Update the user's public metadata with the user type
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: type,
      },
    });

    console.log(`API - User type set to: ${type} for user ID: ${userId}`);

    // Prepare the redirect URL
    const dashboardPath = type === "professional" ? "/professionals/dashboard" : "/clients/dashboard";
    const redirectUrl = new URL(dashboardPath, request.url);
    
    console.log(`API - Redirecting to: ${redirectUrl.toString()}`);
    
    // Use 307 temporary redirect for proper handling
    return NextResponse.redirect(redirectUrl, { status: 307 });
  } catch (error) {
    console.error("API - Error setting user type:", error);
    return NextResponse.json(
      { error: "Failed to set user type" },
      { status: 500 }
    );
  }
} 