// src/components/Hero.jsx
export default function Hero({ onViewServices }) {
  return (
    <section 
      className="relative h-[500px] md:h-[550px] flex items-center justify-center bg-cover bg-center w-full"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&h=900&fit=crop)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wide">
          Welcome to <span className="font-semibold">Mövenpick Na Jomtien</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto tracking-wide">
          Discover restaurants, spa, transfers and special experiences in one place.
        </p>
        <button 
          onClick={onViewServices}
          className="bg-[#8C7343] text-white px-8 py-3 text-base font-medium hover:bg-[#6B5A35] transition-colors tracking-wide rounded-full"
        >
          VIEW SERVICES →
        </button>
      </div>
    </section>
  );
}