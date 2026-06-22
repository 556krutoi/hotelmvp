// src/components/Hero.jsx
export default function Hero({ onViewServices }) {
  return (
    <section 
      className="relative h-[400px] md:h-[450px] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">
          Welcome to <span className="font-semibold">Mövenpick Na Jomtien</span>
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-6 max-w-2xl mx-auto tracking-wide">
          Discover restaurants, spa, transfers and special experiences in one place.
        </p>
        <button 
          onClick={onViewServices}
          className="bg-[#8C7343] text-white px-6 py-2 text-sm font-medium hover:bg-[#6B5A35] transition-colors tracking-wide"
        >
          VIEW SERVICES →
        </button>
      </div>
    </section>
  );
}