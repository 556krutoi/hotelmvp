// src/components/SuccessScreen.jsx
import { useState } from 'react';

export default function SuccessScreen({ requestCode, service, formData, onNewRequest }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(requestCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md">
        {/* Header */}
        <div className="bg-[#2E2E2E] px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="w-8 h-0.5 bg-[#8C7343]"></div>
            <span className="text-3xl">✓</span>
            <div className="w-8 h-0.5 bg-[#8C7343]"></div>
          </div>
          <h3 className="text-white text-xl font-light text-center mt-3 tracking-wide">
            REQUEST CONFIRMED
          </h3>
        </div>
        
        <div className="p-6">
          <p className="text-gray-500 text-sm text-center mb-6">
            Your request has been submitted successfully.
          </p>
          
          {/* Request Code Card */}
          <div className="bg-[#F5F2ED] p-4 mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 text-center">
              Your Request Code
            </p>
            <div className="flex items-center justify-center gap-3">
              <code className="text-2xl font-mono font-bold text-[#8C7343] tracking-wider">
                {requestCode}
              </code>
              <button
                onClick={handleCopyCode}
                className="text-gray-400 hover:text-[#8C7343] transition-colors text-xl"
                title="Copy code"
              >
                {copied ? '✓' : '⎘'}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center border-t border-gray-200 pt-3">
              Show this code to hotel staff
            </p>
          </div>
          
          {/* Request Details */}
          <div className="mb-6">
            <p className="text-xs font-medium text-[#2E2E2E] uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">
              Request Details
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Service</span>
                <span className="text-[#2E2E2E] font-medium">{service.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guest</span>
                <span className="text-[#2E2E2E]">{formData.guestName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Room</span>
                <span className="text-[#2E2E2E]">{formData.roomNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date & Time</span>
                <span className="text-[#2E2E2E]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guests</span>
                <span className="text-[#2E2E2E]">{formData.guests}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onNewRequest}
            className="w-full bg-[#8C7343] text-white py-3 font-medium tracking-wide hover:bg-[#6B5A35] transition-colors"
          >
            MAKE ANOTHER REQUEST
          </button>
        </div>
      </div>
    </div>
  );
}