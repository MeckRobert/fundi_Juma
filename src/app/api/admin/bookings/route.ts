import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let whereClause: any = {};
    
    if (status && status !== 'ALL') {
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
    console.error('Fetch admin bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, status, adminNotes } = body;

    if (!bookingId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status,
        adminNotes,
        confirmedAt: status === 'APPROVED' ? new Date() : undefined,
      },
    });

    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error('Update booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}