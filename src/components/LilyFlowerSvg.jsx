import React from 'react';

// Delicate and minimalist Lily Flower SVG vectors
export const LilyIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Center stem & pistil */}
    <path 
      d="M50 88C50 65 48 45 50 25" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    <circle cx="50" cy="23" r="3" fill={color} />
    
    {/* Left Anther */}
    <path 
      d="M49 45C44 38 38 34 33 32" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round"
    />
    <circle cx="32" cy="31" r="2.2" fill={color} />
    
    {/* Right Anther */}
    <path 
      d="M51 45C56 38 62 34 67 32" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round"
    />
    <circle cx="68" cy="31" r="2.2" fill={color} />

    {/* Center Top Petal */}
    <path 
      d="M50 82C43 65 37 40 50 12C63 40 57 65 50 82Z" 
      stroke={color} 
      strokeWidth="2.2" 
      fill={color} 
      fillOpacity="0.12" 
      strokeLinejoin="round"
    />

    {/* Left Petal */}
    <path 
      d="M48 83C35 75 14 58 18 35C28 45 42 65 48 83Z" 
      stroke={color} 
      strokeWidth="2.2" 
      fill={color} 
      fillOpacity="0.18" 
      strokeLinejoin="round"
    />

    {/* Right Petal */}
    <path 
      d="M52 83C65 75 86 58 82 35C72 45 58 65 52 83Z" 
      stroke={color} 
      strokeWidth="2.2" 
      fill={color} 
      fillOpacity="0.18" 
      strokeLinejoin="round"
    />

    {/* Bottom Left Petal Accent */}
    <path 
      d="M46 84C32 83 20 72 16 60C26 62 40 73 46 84Z" 
      stroke={color} 
      strokeWidth="1.8" 
      fill={color} 
      fillOpacity="0.1" 
      strokeLinejoin="round"
    />

    {/* Bottom Right Petal Accent */}
    <path 
      d="M54 84C68 83 80 72 84 60C74 62 60 73 54 84Z" 
      stroke={color} 
      strokeWidth="1.8" 
      fill={color} 
      fillOpacity="0.1" 
      strokeLinejoin="round"
    />

    {/* Small elegant leaf */}
    <path 
      d="M50 85C42 88 32 94 28 98C35 94 45 90 50 85Z" 
      fill={color} 
      opacity="0.3"
    />
    <path 
      d="M50 85C58 88 68 94 72 98C65 94 55 90 50 85Z" 
      fill={color} 
      opacity="0.3"
    />
  </svg>
);

export const LilyBouquet = ({ className = "w-12 h-12", color = "currentColor" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <LilyIcon className="w-full h-full transform -rotate-12 opacity-80" color={color} />
    <LilyIcon className="w-4/5 h-4/5 absolute -top-1 right-0 transform rotate-15 opacity-60" color={color} />
  </div>
);
