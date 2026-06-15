// src/components/Header.jsx
export default function Header({ bookingsCount = 0, onOpenAdmin }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* ВСТАВЬ КАРТИНКУ ВМЕСТО ПУСТОГО SPAN */}
          <img 
            src="/images/logo.png" 
            alt="Mövenpick Logo" 
            className="h-32 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-[#2E2E2E] hover:text-[#8C7343] transition-colors">Services</a>
            <button onClick={onOpenAdmin} className="text-[#2E2E2E] hover:text-[#8C7343] transition-colors">Admin</button>
          </nav>
          
          {bookingsCount > 0 && (
            <div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}