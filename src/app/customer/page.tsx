'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function CustomerDashboard() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {session?.user?.name || 'Customer'}!</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/customer/bookings/new" className="block">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">New Consultation</h2>
            <p className="text-gray-600">Book a consultation for special events, pre-wedding, or wedding wearing</p>
          </div>
        </Link>
        
        <Link href="/customer/bookings" className="block">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">My Consultations</h2>
            <p className="text-gray-600">View and track your consultation bookings</p>
          </div>
        </Link>
      </div>
    </div>
  );
}