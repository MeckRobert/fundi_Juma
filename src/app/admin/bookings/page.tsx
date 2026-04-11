'use client';

import { useState, useEffect } from 'react';

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
  adminNotes: string;
  createdAt: string;
  confirmedAt: string | null;
  user: {
    name: string;
    email: string;
  };
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`/api/admin/bookings?status=${filter}`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (bookingId: string, status: string) => {
    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId,
          status,
          adminNotes,
        }),
      });

      if (response.ok) {
        fetchBookings();
        setShowModal(false);
        setSelectedBooking(null);
        setAdminNotes('');
      } else {
        alert('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('An error occurred');
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
        return 'Special Events';
      case 'PRE_WEDDING':
        return 'Pre-Wedding';
      case 'WEDDING':
        return 'Wedding';
      default:
        return type;
    }
  };

  const openStatusModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setAdminNotes(booking.adminNotes || '');
    setShowModal(true);
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
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Bookings Management</h1>

      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {['ALL', 'PENDING', 'APPROVED', 'COMPLETED', 'CANCELLED'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 font-medium transition-colors ${
              filter === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Bookings</p>
          <p className="text-2xl font-bold">{bookings.length}</p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">
            {bookings.filter(b => b.status === 'PENDING').length}
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Approved</p>
          <p className="text-2xl font-bold text-green-600">
            {bookings.filter(b => b.status === 'APPROVED').length}
          </p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-blue-600">
            {bookings.filter(b => b.status === 'COMPLETED').length}
          </p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Consultation Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preferred Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{booking.fullName}</div>
                  <div className="text-sm text-gray-500">{booking.email}</div>
                  <div className="text-sm text-gray-500">{booking.phone}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {getConsultationTypeLabel(booking.consultationType)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {new Date(booking.eventDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {new Date(booking.preferredDate).toLocaleDateString()} at {booking.preferredTime}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => openStatusModal(booking)}
                    className="text-blue-600 hover:text-blue-900 font-medium"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Update Modal */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Update Booking Status</h2>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">Customer: {selectedBooking.fullName}</p>
              <p className="text-sm text-gray-600">Type: {getConsultationTypeLabel(selectedBooking.consultationType)}</p>
              <p className="text-sm text-gray-600">Current Status: 
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(selectedBooking.status)}`}>
                  {selectedBooking.status}
                </span>
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Status
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                defaultValue={selectedBooking.status}
                onChange={(e) => {
                  setSelectedBooking({ ...selectedBooking, status: e.target.value });
                }}
              >
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Notes
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Add notes about this booking..."
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleStatusUpdate(selectedBooking.id, selectedBooking.status)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Update
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}