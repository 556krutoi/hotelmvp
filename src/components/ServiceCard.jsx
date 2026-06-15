// src/components/ServiceCard.jsx
export default function ServiceCard({ service, onClick }) {
  return (
    <div 
      className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(service)}
    >
      {/* Квадратное изображение */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F2ED]">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Тёмная полоска сверху - стиль премиум отеля */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#8C7343]"></div>
        
        {/* Категория */}
        <span className="absolute top-4 left-4 text-xs font-medium text-white bg-[#2E2E2E] px-3 py-1.5 tracking-wide">
          {service.category.toUpperCase()}
        </span>
        
        {/* Цена */}
        <span className="absolute bottom-4 right-4 text-white bg-[#8C7343] px-3 py-1.5 text-sm font-bold tracking-wide">
          {service.price}
        </span>
      </div>
      
      {/* Контент */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-[#2E2E2E] tracking-tight">
            {service.title}
          </h3>
          <span className="text-2xl opacity-60">{service.icon}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        
        <div className="flex items-center gap-4 mb-5 text-xs text-gray-400 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1">
            <span>🕐</span>
            <span>{service.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{service.location}</span>
          </div>
        </div>
        
        <button className="w-full bg-white border border-[#8C7343] text-[#8C7343] py-2.5 text-sm font-medium hover:bg-[#8C7343] hover:text-white transition-all duration-300 tracking-wide">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}