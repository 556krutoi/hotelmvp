// src/components/AdminPanel.jsx
import { useState, useEffect } from 'react';
import { getRequestsFromLocalStorage, updateRequestStatus, deleteRequest } from '../utils/requestUtils';

const ADMIN_PASSWORD = 'admin123';

export default function AdminPanel({ onClose }) {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadRequests();
    }
  }, [isAuthenticated]);

  const loadRequests = () => {
    const allRequests = getRequestsFromLocalStorage();
    setRequests(allRequests.reverse());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleStatusChange = (id, newStatus) => {
    updateRequestStatus(id, newStatus);
    loadRequests();
  };

  const handleDelete = (id) => {
    if (confirm('Delete this request?')) {
      deleteRequest(id);
      loadRequests();
    }
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(r => r.status === filter);

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    confirmed: requests.filter(r => r.status === 'confirmed').length,
    completed: requests.filter(r => r.status === 'completed').length,
    cancelled: requests.filter(r => r.status === 'cancelled').length
  };

  // Если не авторизован - показываем форму входа
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-md">
          <div className="bg-[#2E2E2E] px-6 py-5 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white tracking-wide">ADMIN ACCESS</h2>
            <button onClick={onClose} className="text-white text-2xl hover:text-[#8C7343] transition">×</button>
          </div>
          
          <form onSubmit={handleLogin} className="p-6">
            <p className="text-gray-500 text-sm mb-6">Enter password to access admin panel</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8C7343]"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#8C7343] text-white py-3 font-medium tracking-wide hover:bg-[#6B5A35] transition"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Если авторизован - показываем админку
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#2E2E2E] px-6 py-5 flex justify-between items-center sticky top-0">
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">ADMIN PANEL</h2>
            <p className="text-gray-400 text-sm mt-1">Manage guest requests</p>
          </div>
          <button onClick={onClose} className="text-white text-2xl hover:text-[#8C7343] transition">×</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 border-b">
          <div className="px-6 py-4 text-center border-r">
            <div className="text-2xl font-bold text-[#2E2E2E]">{stats.total}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Total</div>
          </div>
          <div className="px-6 py-4 text-center border-r">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Pending</div>
          </div>
          <div className="px-6 py-4 text-center border-r">
            <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Confirmed</div>
          </div>
          <div className="px-6 py-4 text-center border-r">
            <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Completed</div>
          </div>
          <div className="px-6 py-4 text-center">
            <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Cancelled</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 px-6 py-4 border-b bg-[#F5F2ED]">
          {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1.5 text-sm uppercase tracking-wide transition ${
                filter === status 
                  ? 'bg-[#2E2E2E] text-white' 
                  : 'bg-white text-[#2E2E2E] border border-gray-200 hover:border-[#8C7343]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="divide-y">
          {filteredRequests.length === 0 ? (
            <div className="px-6 py-20 text-center text-gray-400">No requests found</div>
          ) : (
            filteredRequests.map(req => (
              <div key={req.id} className="px-6 py-5 hover:bg-[#F5F2ED] transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <code className="font-mono font-bold text-[#8C7343] bg-[#F5F2ED] px-2 py-1 text-sm">
                        {req.requestCode}
                      </code>
                      <span className={`text-xs px-3 py-1 uppercase tracking-wide font-medium ${
                        req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        req.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        req.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {req.status}
                      </span>
                      <span className="text-xs text-gray-400">{req.timestamp?.slice(0, 10)}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
                      <div><span className="text-gray-400">Service:</span> <span className="font-medium">{req.serviceTitle}</span></div>
                      <div><span className="text-gray-400">Guest:</span> {req.guestName}</div>
                      <div><span className="text-gray-400">Room:</span> {req.roomNumber}</div>
                      <div><span className="text-gray-400">Guests:</span> {req.guests}</div>
                      <div><span className="text-gray-400">Date:</span> {req.date}</div>
                      <div><span className="text-gray-400">Time:</span> {req.time}</div>
                    </div>
                    
                    {req.comment && (
                      <div className="mt-2 text-sm text-gray-500 bg-[#F5F2ED] p-2">
                        📝 {req.comment}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <select
                      value={req.status}
                      onChange={(e) => handleStatusChange(req.id, e.target.value)}
                      className="px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-[#8C7343] bg-white"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                      onClick={() => handleDelete(req.id)}
                      className="px-3 py-2 border border-red-200 text-red-500 text-sm hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}