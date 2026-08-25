import React from 'react';

/**
 * High-fidelity vector faceted 3D glass crystal prisms matching the reference layout:
 * - Rectangular hollow/faceted prism (Card 1)
 * - Hexagonal multifaceted prism (Card 3)
 * - Triangular pyramid prism (Card 4)
 */

export const RectangularPrism: React.FC<{ className?: string }> = ({ className = "w-24 h-32" }) => {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="crystal-prism-rect"
    >
      <defs>
        <linearGradient id="rectGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="rectGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="rectGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Back Facets */}
      <polygon points="45,15 95,25 90,125 40,115" fill="url(#rectGrad2)" fillOpacity="0.35" />
      
      {/* Internal Hollow Opening */}
      <polygon points="35,40 75,48 70,120 30,112" fill="#000000" fillOpacity="0.7" />

      {/* Top Face */}
      <polygon points="20,35 65,15 95,25 50,45" fill="url(#rectGrad1)" fillOpacity="0.75" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />

      {/* Left Front Outer Face */}
      <polygon points="20,35 50,45 42,145 12,135" fill="url(#rectGrad3)" fillOpacity="0.6" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.9" />

      {/* Right Front Outer Face */}
      <polygon points="50,45 95,25 85,125 42,145" fill="url(#rectGrad1)" fillOpacity="0.45" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />

      {/* Inside Left Wall */}
      <polygon points="50,45 35,40 30,112 42,145" fill="url(#rectGrad2)" fillOpacity="0.5" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Inside Top Ceiling */}
      <polygon points="65,15 95,25 75,48 35,40" fill="url(#rectGrad3)" fillOpacity="0.4" />

      {/* Bottom Facet */}
      <polygon points="12,135 42,145 85,125 55,115" fill="url(#rectGrad1)" fillOpacity="0.7" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />

      {/* Crisp Reflection Highlights */}
      <line x1="20" y1="35" x2="12" y2="135" stroke="url(#edgeGlow)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="50" y1="45" x2="42" y2="145" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="15" x2="50" y2="45" stroke="#ffffff" strokeWidth="1.5" />
      <line x1="12" y1="135" x2="42" y2="145" stroke="#ffffff" strokeWidth="1.8" />
    </svg>
  );
};

export const HexagonalPrism: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="crystal-prism-hex"
    >
      <defs>
        <linearGradient id="hexGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="hexGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="hexGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Extruded Back Face */}
      <polygon points="50,15 105,25 125,75 95,115 40,105 20,55" fill="url(#hexGrad3)" fillOpacity="0.3" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Facet Bridges */}
      <polygon points="40,25 50,15 105,25 95,35" fill="url(#hexGrad1)" fillOpacity="0.6" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
      <polygon points="95,35 105,25 125,75 115,85" fill="url(#hexGrad2)" fillOpacity="0.5" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
      <polygon points="115,85 125,75 95,115 85,125" fill="url(#hexGrad1)" fillOpacity="0.7" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.85" />
      <polygon points="85,125 95,115 40,105 30,115" fill="url(#hexGrad2)" fillOpacity="0.45" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
      <polygon points="30,115 40,105 20,55 10,65" fill="url(#hexGrad1)" fillOpacity="0.6" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
      <polygon points="10,65 20,55 50,15 40,25" fill="url(#hexGrad2)" fillOpacity="0.5" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />

      {/* Main Front Hexagon Face */}
      <polygon
        points="40,25 95,35 115,85 85,125 30,115 10,65"
        fill="url(#hexGrad1)"
        fillOpacity="0.3"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeOpacity="0.9"
      />

      {/* Internal crystal facets / cuts */}
      <line x1="40" y1="25" x2="85" y2="125" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="95" y1="35" x2="30" y2="115" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="10" y1="65" x2="115" y2="85" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Top Bright Edge Reflections */}
      <line x1="40" y1="25" x2="95" y2="35" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="85" y1="125" x2="115" y2="85" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="85" y1="125" x2="95" y2="115" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export const PyramidPrism: React.FC<{ className?: string }> = ({ className = "w-28 h-32" }) => {
  return (
    <svg
      viewBox="0 0 130 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="crystal-prism-pyramid"
    >
      <defs>
        <linearGradient id="pyrGrad1" x1="50%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="pyrGrad2" x1="50%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="pyrGradBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Back Facet / Depth Reflection */}
      <polygon points="65,15 10,110 115,120" fill="url(#pyrGradBase)" fillOpacity="0.2" />

      {/* Left Front Facet */}
      <polygon
        points="65,15 10,110 60,135"
        fill="url(#pyrGrad1)"
        fillOpacity="0.5"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />

      {/* Right Front Facet */}
      <polygon
        points="65,15 60,135 120,95"
        fill="url(#pyrGrad2)"
        fillOpacity="0.7"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeOpacity="0.9"
      />

      {/* Bottom Base Facet */}
      <polygon
        points="10,110 60,135 120,95"
        fill="url(#pyrGradBase)"
        fillOpacity="0.65"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />

      {/* Internal crystal refraction cuts */}
      <polygon points="65,15 45,95 60,135" fill="#ffffff" fillOpacity="0.15" />
      <polygon points="65,15 85,85 60,135" fill="#ffffff" fillOpacity="0.2" />

      {/* Sharp High-Contrast Highlight Edges */}
      <line x1="65" y1="15" x2="60" y2="135" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="65" y1="15" x2="120" y2="95" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="135" x2="120" y2="95" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="10" y1="110" x2="60" y2="135" stroke="#ffffff" strokeWidth="1.8" />
      
      {/* Light vertex glare */}
      <circle cx="65" cy="15" r="2.5" fill="#ffffff" />
      <circle cx="60" cy="135" r="2" fill="#ffffff" />
    </svg>
  );
};
