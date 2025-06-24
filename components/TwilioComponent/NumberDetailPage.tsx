'use client';

import { useState } from 'react';
import { TwilioNumber } from './types/types';

interface NumberDetailsPageProps {
  number: TwilioNumber;
  onBack: () => void;
  onSubmit: (phoneNumber: string) => void;
}

export default function NumberDetailsPage({ number, onBack, onSubmit }: NumberDetailsPageProps) {
  const [authorizedUserDoc, setAuthorizedUserDoc] = useState<File | null>(null);
  const [businessNameDoc, setBusinessNameDoc] = useState<File | null>(null);
  const [serviceAddressDoc, setServiceAddressDoc] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = () => {
    if (!authorizedUserDoc || !businessNameDoc || !serviceAddressDoc) {
      alert('Please upload all required documents');
      return;
    }
    if (!email) {
      alert('Please provide an email address');
      return;
    }
    onSubmit(number.phone_number);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-200 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to numbers
        </button>

        <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 text-emerald-400 break-all">{number.phone_number}</h1>
          {number.friendly_name && (
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{number.friendly_name}</p>
          )}

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-200">Request Number</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                Please provide the required information and upload verification documents for this number.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Authorized User's Name (Document)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={(e) => setAuthorizedUserDoc(e.target.files?.[0] || null)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 p-2 sm:p-3 rounded-md sm:rounded-lg focus:border-emerald-500 focus:ring-emerald-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium sm:file:font-semibold file:bg-gray-600 file:text-gray-300 hover:file:bg-gray-500 text-xs sm:text-sm"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Upload document showing authorized user's first and last name (PDF, JPG or PNG, Max 5MB)</p>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Business Name (Document)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={(e) => setBusinessNameDoc(e.target.files?.[0] || null)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 p-2 sm:p-3 rounded-md sm:rounded-lg focus:border-emerald-500 focus:ring-emerald-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium sm:file:font-semibold file:bg-gray-600 file:text-gray-300 hover:file:bg-gray-500 text-xs sm:text-sm"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Upload document showing business name if applicable (PDF, JPG or PNG, Max 5MB)</p>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Service Address (Document)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={(e) => setServiceAddressDoc(e.target.files?.[0] || null)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 p-2 sm:p-3 rounded-md sm:rounded-lg focus:border-emerald-500 focus:ring-emerald-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium sm:file:font-semibold file:bg-gray-600 file:text-gray-300 hover:file:bg-gray-500 text-xs sm:text-sm"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Upload document showing valid physical address (not a PO Box) (PDF, JPG or PNG, Max 5MB)</p>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 p-2 sm:p-3 rounded-md sm:rounded-lg focus:border-emerald-500 focus:ring-emerald-500 text-sm sm:text-base"
                  placeholder="Enter email for Letter of Authorization (LoA)"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Additional Information</label>
                <textarea
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 p-2 sm:p-3 rounded-md sm:rounded-lg focus:border-emerald-500 focus:ring-emerald-500 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                  placeholder="Any additional details about your request..."
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                onClick={onBack}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-200 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white rounded-md sm:rounded-lg hover:bg-emerald-700 transition-colors text-sm sm:text-base"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}