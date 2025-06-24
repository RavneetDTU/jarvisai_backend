'use client';

import { useEffect, useState } from 'react';
import { TwilioNumber } from './types/types';
import NumberDetailsPage from './NumberDetailPage';

export default function TwilioPage() {
  const [numbers, setNumbers] = useState<TwilioNumber[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState<TwilioNumber | null>(null);

  useEffect(() => {
    const fetchNumbers = async () => {
      const accountSid = `${process.env.NEXT_PUBLIC_TWILIO_ACCOUNTSID}`;
      const authToken = `${process.env.NEXT_PUBLIC_TWILIO_TOKEN}`;
      const base64Credentials = btoa(`${accountSid}:${authToken}`);

      try {
        const response = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/AvailablePhoneNumbers/ZA/Local.json?PageSize=20`,
          {
            headers: {
              Authorization: `Basic ${base64Credentials}`,
            },
          }
        );

        const data = await response.json();
        setNumbers(data.available_phone_numbers || []);
      } catch (err) {
        console.error('Failed to fetch Twilio numbers', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNumbers();
  }, []);

  const handleSubmitRequest = (phoneNumber: string) => {
    alert(`Request submitted for ${phoneNumber}`);
    setSelectedNumber(null);
  };

  if (selectedNumber) {
    return (
      <NumberDetailsPage
        number={selectedNumber}
        onBack={() => setSelectedNumber(null)}
        onSubmit={handleSubmitRequest}
      />
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-900 text-gray-50">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Available Twilio Numbers (ZA)</h1>

      {loading ? (
        <div className="text-center py-8 sm:py-12">
          <div className="inline-block animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-emerald-500 mb-3 sm:mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base">Loading numbers...</p>
        </div>
      ) : numbers.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-gray-500 mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-400 text-sm sm:text-base">No available numbers found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {numbers.map((num, idx) => (
            <div
              key={idx}
              className="bg-gray-800 shadow-sm sm:shadow-md rounded-lg sm:rounded-xl p-3 sm:p-5 flex flex-col justify-between border border-gray-700 hover:border-emerald-500 transition-colors group"
            >
              <div>
                <p className="text-base sm:text-lg font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors break-all">
                  {num.phone_number}
                </p>
                {num.friendly_name && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">{num.friendly_name}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedNumber(num)}
                className="mt-3 sm:mt-4 bg-emerald-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-md sm:rounded-lg hover:bg-emerald-700 transition-colors w-full text-sm sm:text-base"
              >
                Select Number
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}