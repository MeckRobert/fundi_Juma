// app/dashboard/page.tsx
"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-amber-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Account Details</h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone || 'Not provided'}</p>
              <p className="text-gray-600">Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
            
            <div className="p-6 bg-amber-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
              <button className="w-full mb-3 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
                View Orders
              </button>
              <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}