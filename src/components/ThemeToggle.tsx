import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import ThemeCustomizer from './ThemeCustomizer';

const ThemeToggle: React.FC = () => {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-r-xl z-40 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg group"
        title="Theme Customizer"
      >
        <Settings className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <ThemeCustomizer 
        isOpen={isCustomizerOpen} 
        onClose={() => setIsCustomizerOpen(false)} 
      />
    </>
  );
};

export default ThemeToggle;