// src/components/RequestForm.jsx
import { useState } from 'react';

export default function RequestForm({ service, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    guestName: '',
    roomNumber: '',
    date: '',
    time: '',
    guests: 2,
    comment: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.guestName.trim()) newErrors.guestName = 'Guest name is required';
    if (!formData.roomNumber.trim()) newErrors.roomNumber = 'Room number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-5 border-b flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-[#2E2E2E]">Request a Service</h2>
            <p className="text-sm text-gray-500 mt-1">{service.title}</p>
          </div>
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
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#8C7343] text-[#2E2E2E] ${
                errors.guestName ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Enter your full name"
            />
            {errors.guestName && <p className="text-red-500 text-xs mt-1">{errors.guestName}</p>}
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
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#8C7343] text-[#2E2E2E] ${
                errors.roomNumber ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g., 1205"
            />
            {errors.roomNumber && <p className="text-red-500 text-xs mt-1">{errors.roomNumber}</p>}
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
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#8C7343] ${
                  errors.date ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
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
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-[#8C7343] ${
                  errors.time ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
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
            Generate Request Code →
          </button>
        </form>
      </div>
    </div>
  );
}