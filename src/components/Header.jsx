// src/components/Header.jsx
export default function Header({ onOpenAdmin }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-16 w-auto"  // ← было h-12, стало h-16
          />
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#services" className="text-sm text-[#2E2E2E] hover:text-[#8C7343] transition uppercase tracking-wide">Services</a>
          <button onClick={onOpenAdmin} className="text-sm text-[#2E2E2E] hover:text-[#8C7343] transition uppercase tracking-wide">Admin</button>
        </nav>
      </div>
    </header>
  );
}