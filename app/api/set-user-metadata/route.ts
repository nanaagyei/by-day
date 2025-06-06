import { clerkClient } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { userId, userType } = await req.json()
    
    if (!userId || !userType) {
      return NextResponse.json(
        { error: 'Missing userId or userType' },
        { status: 400 }
      )
    }

    // Use clerkClient to update public metadata on the backend
    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userType
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API - Error updating user metadata:', error)
    return NextResponse.json(
      { error: 'Failed to update user metadata' },
      { status: 500 }
    )
  }
} 