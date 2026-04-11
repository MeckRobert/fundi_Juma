import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      consultationType,
      eventDate,
      preferredDate,
      preferredTime,
      fullName,
      email,
      phone,
      message,
    } = body;

    // Validate required fields
    if (!userId || !consultationType || !eventDate || !preferredDate || !preferredTime || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        consultationType,
        eventDate: new Date(eventDate),
        preferredDate: new Date(preferredDate),
        preferredTime,
        fullName,
        email,
        phone,
        message,
        status: 'PENDING',
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    let whereClause: any = {};
    
    if (userId) {
      whereClause.userId = userId;
    }
    
    if (status) {
      whereClause.status = status;
    }

    const bookings = await prisma.booking.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}