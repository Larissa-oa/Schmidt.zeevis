import React from 'react';

// Fish icon - simple fish design
export const FishIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M20 12c0 5.52-4.48 10-10 10S0 17.52 0 12 4.48 2 10 2s10 4.48 10 10z" 
      fill="currentColor"
      opacity="0.1"
    />
    <path 
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" 
      fill="currentColor"
    />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
  </svg>
);

// Ocean/Wave icon - wave pattern
export const OceanIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12z" 
      fill="currentColor"
      opacity="0.1"
    />
    <path 
      d="M4 14c1.5-1.5 3-2 5-2s3.5.5 5 2M8 10c1.5-1.5 3-2 5-2s3.5.5 5 2M6 18c1.5-1.5 3-2 5-2s3.5.5 5 2" 
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Chef/Expertise icon - chef hat
export const ChefIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
      fill="currentColor"
      opacity="0.1"
    />
    <path 
      d="M8 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v2h-2v2h2v2h-2v2H8v-2H6v-2h2v-2H6v-2h2V8z" 
      fill="currentColor"
    />
  </svg>
);

// Arrow icon for exploration
export const ArrowIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" 
      fill="currentColor"
    />
  </svg>
); 