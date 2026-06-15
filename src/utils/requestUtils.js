// src/utils/requestUtils.js

export const generateRequestCode = (serviceCode, roomNumber) => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const code = serviceCode.toUpperCase().replace(/\s/g, '');
  const room = roomNumber.toString().trim();
  return `${code}-${room}-${randomNum}`;
};

export const saveRequestToLocalStorage = (request) => {
  const existingRequests = localStorage.getItem('hotelRequests');
  const requests = existingRequests ? JSON.parse(existingRequests) : [];
  requests.push({
    ...request,
    id: Date.now(),
    status: 'pending',
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('hotelRequests', JSON.stringify(requests));
};

export const getRequestsFromLocalStorage = () => {
  const requests = localStorage.getItem('hotelRequests');
  return requests ? JSON.parse(requests) : [];
};

export const updateRequestStatus = (id, newStatus) => {
  const requests = getRequestsFromLocalStorage();
  const updated = requests.map(req => 
    req.id === id ? { ...req, status: newStatus, updatedAt: new Date().toISOString() } : req
  );
  localStorage.setItem('hotelRequests', JSON.stringify(updated));
};

export const deleteRequest = (id) => {
  const requests = getRequestsFromLocalStorage();
  const filtered = requests.filter(req => req.id !== id);
  localStorage.setItem('hotelRequests', JSON.stringify(filtered));
};

export const getRequestsCount = () => {
  return getRequestsFromLocalStorage().length;
};