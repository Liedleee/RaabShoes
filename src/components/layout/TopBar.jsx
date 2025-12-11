import { Truck } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center py-2 sm:py-3 relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium px-4 sm:px-0">
        <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="truncate">
          Free Pickup & Delivery max 7 km • Promo Spesial Minggu Ini!
        </span>
      </div>
    </div>
  );
};
