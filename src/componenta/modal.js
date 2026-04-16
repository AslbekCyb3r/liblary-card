import React from 'react';

export default function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-2xl shadow-xl w-[400px] p-6 relative animate-fadeIn">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Content */}
        <div className="mt-4">
          {children}
        </div>

      </div>
    </div>
  );
}