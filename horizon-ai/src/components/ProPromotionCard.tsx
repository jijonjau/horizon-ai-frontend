import React from 'react';

const ProPromotionCard = () => {
  return (
    <div
      className="relative flex flex-col items-center p-4 rounded-2xl text-white text-center shadow-lg mt-6 md:max-w-xs mx-auto"
      style={{
        background: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
      }}
    >
      <div className="absolute -top-7 w-22 h-22 bg-opacity-20 rounded-full flex items-center justify-center">
        <img src="/Icons/pro-card.png" alt="Pro Icon" className="w-24 h-24" />
      </div>

      <h2 className="text-lg font-semibold mt-8">Go unlimited with PRO</h2>
      <p className="text-sm mt-1 px-2">
        Get your AI Project to another level and start doing more with Horizon
        AI Template PRO!
      </p>

      <a
        href="https://horizon-ui.com/ai-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-3 bg-[#FFFFFF24] text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition">
          Get started with PRO
        </button>
      </a>
    </div>
  );
};

export default ProPromotionCard;
