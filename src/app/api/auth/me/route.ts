// src/app/api/auth/me/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    // Get token from cookies or authorization header
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Verify token and get user data
    // Add your authentication logic here
    
    return NextResponse.json({
      user: {
        id: 'user-id',
        email: 'user@example.com',
        name: 'User Name',
        role: 'admin' // or whatever role
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add POST, PUT, DELETE methods as needed
export async function POST(request: Request) {
  // Your POST logic
  return NextResponse.json({ message: 'Method not implemented' }, { status: 501 });
}