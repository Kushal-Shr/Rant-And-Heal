'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase/client';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Calendar, Clock, FileText } from 'lucide-react';

export default function AppointmentPage() {
  const { user } = useUser();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = async () => {
    if (!user || !date || !time) return alert('Please fill in all fields');

    setLoading(true);

    alert(`Meeting Booked`)

    setLoading(false);

    setDate('')
    setTime('')
    setNote('')
  };

  return (
    <div className="min-h-screen bg-[#FFF5D6] text-[#4A3C32] flex flex-col items-center py-20 md:py-30 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-center">Book an Appointment</h1>
        <p className="text-[#7D6958] text-center mb-8">Schedule a session with our therapist</p>

        <div className="bg-[#FBE3A2] p-8 rounded-3xl shadow-md border border-[#FFECD6]/40 space-y-6 w-full">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Appointment booked successfully!</span>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-[#4A3C32] font-medium mb-1">Select Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-[#7D6958]/70 w-5 h-5" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl bg-white border border-[#FFECD6]/30 text-[#4A3C32] focus:outline-none focus:ring-2 focus:ring-[#FFCB85]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#4A3C32] font-medium mb-1">Select Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-[#7D6958]/70 w-5 h-5" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl bg-white border border-[#FFECD6]/30 text-[#4A3C32] focus:outline-none focus:ring-2 focus:ring-[#FFCB85]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#4A3C32] font-medium mb-1">Note (optional)</label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-[#7D6958]/70 w-5 h-5" />
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl bg-white border border-[#FFECD6]/30 text-[#4A3C32] focus:outline-none focus:ring-2 focus:ring-[#FFCB85]"
                rows={3}
                placeholder="What would you like to talk about?"
              />
            </div>
          </div>

          <button
            onClick={handleBooking}
            disabled={loading}
            className={`w-full cursor-pointer mt-6 py-4 rounded-4xl text-white font-medium transition-all ${
              loading 
                ? 'bg-[#FFB36B] opacity-70 cursor-not-allowed' 
                : 'bg-[#FFCB85] hover:bg-[#FFB36B]'
            }`}
          >
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
}
