import React from 'react';
import './BrandText.css';

export default function BrandText({ mode = "inline", size = "normal", theme = "dark", className = "" }) {
  const isLightMode = theme === "light";
  const mainColor = isLightMode ? "#FFFFFF" : "#0D1B2A";
  const accentColor = "#E78895";

  if (mode === "stacked") {
    return (
      <div className={`brand-text-wrapper stacked ${size} ${className}`} style={{ color: mainColor }}>
        <div className="brand-top-row">
          <span className="brand-word art">Art</span>
          <span className="brand-amp" style={{ color: accentColor }}>&amp;</span>
        </div>
        <div className="brand-flourish">
          <svg viewBox="0 0 220 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flourish-svg">
            <path 
              d="M 5 22 C 30 26, 70 24, 110 14 C 150 4, 195 2, 218 8 C 175 14, 110 22, 45 22 C 20 22, 2 20, 5 22 Z" 
              fill={accentColor}
            />
          </svg>
        </div>
        <div className="brand-bottom-row">
          <span className="brand-word craft">Craft</span>
        </div>
      </div>
    );
  }

  return (
    <span className={`brand-text-wrapper inline ${size} ${className}`} style={{ color: mainColor }}>
      <span className="brand-word art">Art</span>
      <span className="brand-amp" style={{ color: accentColor }}>&amp;</span>
      <span className="brand-word craft">Craft</span>
    </span>
  );
}
