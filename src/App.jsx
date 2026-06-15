// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import RequestForm from './components/RequestForm';
import SuccessScreen from './components/SuccessScreen';
import AdminPanel from './components/AdminPanel';
import { services } from './data/services';
import { generateRequestCode, saveRequestToLocalStorage, getRequestsCount } from './utils/requestUtils';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [requestCode, setRequestCode] = useState('');
  const [submittedFormData, setSubmittedFormData] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const [bookingsCount, setBookingsCount] = useState(0);
  
  useEffect(() => {
    setBookingsCount(getRequestsCount());
  }, [showSuccess, showAdmin]);
  
  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };
  
  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
  };
  
  const handleFormSubmit = (formData) => {
    const code = generateRequestCode(selectedService.code, formData.roomNumber);
    setRequestCode(code);
    setSubmittedFormData(formData);
    
    saveRequestToLocalStorage({
      serviceCode: selectedService.code,
      serviceTitle: selectedService.title,
      servicePrice: selectedService.price,
      ...formData,
      requestCode: code
    });
    
    setBookingsCount(getRequestsCount());
    setShowForm(false);
    setShowSuccess(true);
  };
  
  const handleNewRequest = () => {
    setShowSuccess(false);
    setSelectedService(null);
    setSubmittedFormData(null);
    setRequestCode('');
  };
  
  const handleViewServices = () => {
    setShowServices(true);
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <Header 
        bookingsCount={bookingsCount}
        onOpenAdmin={() => setShowAdmin(true)}
      />
      <Hero onViewServices={handleViewServices} />
      
      {showServices && (
        <main id="services" className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-[#2E2E2E] mb-3 tracking-wide">
              OUR SERVICES
            </h2>
            <div className="w-16 h-0.5 bg-[#8C7343] mx-auto"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Choose from our premium services and experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={handleSelectService}
              />
            ))}
          </div>
        </main>
      )}
      
      {showForm && selectedService && (
        <RequestForm 
          service={selectedService}
          onSubmit={handleFormSubmit}
          onClose={handleCloseForm}
        />
      )}
      
      {showSuccess && selectedService && submittedFormData && (
        <SuccessScreen 
          requestCode={requestCode}
          service={selectedService}
          formData={submittedFormData}
          onNewRequest={handleNewRequest}
        />
      )}
      
      {showAdmin && (
        <AdminPanel onClose={() => setShowAdmin(false)} />
      )}
    </div>
  );
}

export default App;