// src/components/BookingForm.jsx
import { useState } from 'react';

export default function BookingForm({ service, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    guestName: '',
    roomNumber: '',
    serviceName: service.title,
    date: '',
    time: '',
    guests: 2,
    comment: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onSubmit(formData);
    
    setTimeout(() => {
      onClose();
    }, 3000);
  };
  
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Thank you!</h3>
          <p className="text-gray-600">Your request has been sent</p>
          <p className="text-sm text-gray-400 mt-4">Our staff will contact you shortly</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-5 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#2E2E2E]">Book a Service</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Guest Name *
            </label>
            <input
              type="text"
              name="guestName"
              required
              value={formData.guestName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343] text-[#2E2E2E]"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Room Number *
            </label>
            <input
              type="text"
              name="roomNumber"
              required
              value={formData.roomNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343] text-[#2E2E2E]"
              placeholder="e.g., 1205"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Selected Service
            </label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              disabled
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-[#2E2E2E]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
                Time *
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343]"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Number of Guests *
            </label>
            <input
              type="number"
              name="guests"
              required
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Special Requests
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8C7343] resize-none"
              placeholder="Dietary restrictions, allergies, special occasions..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#8C7343] text-white py-3.5 rounded-xl font-semibold text-base hover:bg-[#6B5A35] transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}