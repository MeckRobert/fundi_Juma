'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface Booking {
  id: string;
  consultationType: string;
  eventDate: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
  confirmedAt: string | null;
}

export default function CustomerBookingsPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('PENDING');

  useEffect(() => {
    if (session?.user?.id) {
      fetchBookings();
    }
  }, [session, activeTab]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`/api/bookings?userId=${session?.user?.id}&status=${activeTab}`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED':
        return 'bg-green-100 text-green-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      case 'COMPLETED':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getConsultationTypeLabel = (type: string) => {
    switch (type) {
      case 'SPECIAL_EVENTS':
        return 'Special Events Wearing Consultation';
      case 'PRE_WEDDING':
        return 'Pre-Wedding Wearing Consultation';
      case 'WEDDING':
        return 'Wedding Wearing Consultation';
      default:
        return type;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Consultations</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {['PENDING', 'APPROVED', 'COMPLETED', 'CANCELLED'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      {bookings.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No {activeTab.toLowerCase()} bookings found.</p>
          <a
            href="/customer/bookings/new"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Create New Booking
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {getConsultationTypeLabel(booking.consultationType)}
                  </h3>
                  <p className="text-gray-600">
                    Booked on: {new Date(booking.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Event Date</p>
                  <p className="font-medium">{new Date(booking.eventDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Preferred Consultation Date</p>
                  <p className="font-medium">{new Date(booking.preferredDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Preferred Time</p>
                  <p className="font-medium">{booking.preferredTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">{booking.phone}</p>
                  <p className="text-sm text-gray-600">{booking.email}</p>
                </div>
              </div>

              {booking.message && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Additional Message</p>
                  <p className="text-gray-700">{booking.message}</p>
                </div>
              )}

              {booking.status === 'APPROVED' && booking.confirmedAt && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✓ Approved on {new Date(booking.confirmedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}