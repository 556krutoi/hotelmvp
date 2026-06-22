// src/components/Header.jsx
export default function Header({ onOpenAdmin }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="Mövenpick Logo" 
            className="h-12 w-auto"
          />
          <div>
            <span className="font-light text-sm text-[#2E2E2E] tracking-wide">Mövenpick <span className="font-semibold">Na Jomtien</span></span>
            <span className="text-[9px] text-gray-400 block -mt-0.5">Siam Pattaya</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-xs text-[#2E2E2E] hover:text-[#8C7343] transition uppercase tracking-wide">Services</a>
          <button onClick={onOpenAdmin} className="text-xs text-[#2E2E2E] hover:text-[#8C7343] transition uppercase tracking-wide">Admin</button>
        </nav>
      </div>
    </header>
  );
}