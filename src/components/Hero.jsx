// src/components/Hero.jsx
export default function Hero({ onViewServices }) {
  return (
    <section 
      className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to Mövenpick Na Jomtien
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover restaurants, spa, transfers and special experiences in one place.
        </p>
        <button 
          onClick={onViewServices}
          className="bg-[#8C7343] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6B5A35] transition-colors shadow-lg"
        >
          View services →
        </button>
      </div>
    </section>
  );
}