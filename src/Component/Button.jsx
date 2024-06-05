// src/ToggleButton.js

import React, { useState } from 'react';

const ToggleButton = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <span className={`text-sm ${isDay ? 'text-blue-600' : 'text-gray-600'}`}>Day</span>
        <button
          onClick={() => setIsDay(!isDay)}
          className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none ${
            isDay ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform ${
              isDay ? 'translate-x-1' : 'translate-x-9'
            }`}
          />
        </button>
        <span className={`text-sm ${!isDay ? 'text-blue-600' : 'text-gray-600'}`}>Week</span>
      </div>
    </div>
  );
};

export default ToggleButton;
