import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12', variant = 'color', showText = true }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="h-full w-auto aspect-square drop-shadow-md"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Badge Frame */}
        <circle cx="100" cy="100" r="92" stroke={isDark ? '#F59E0B' : '#2D5A43'} strokeWidth="4" strokeDasharray="6 3" />
        <circle cx="100" cy="100" r="86" fill={isDark ? '#1B3B2B' : '#FAF5EF'} stroke={isDark ? '#2D5A43' : '#8B5A2B'} strokeWidth="2" />
        
        {/* Curved Path for Arc Text */}
        <path id="textArc" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
        
        {/* Brand Name along Arc */}
        <text className="font-heading font-bold text-[14px]" fill={isDark ? '#F59E0B' : '#1B3B2B'} letterSpacing="2">
          <textPath href="#textArc" startOffset="50%" textAnchor="middle">
            САДИБА ПІД ЛІСОМ
          </textPath>
        </text>

        {/* Pine Trees (Background Left & Right) */}
        {/* Left Tree */}
        <path d="M45 110 L30 145 H60 Z M45 90 L33 120 H57 Z M45 75 L38 98 H52 Z" fill="#2D5A43" />
        <rect x="43" y="145" width="4" height="12" fill="#623F31" />
        
        {/* Right Tree */}
        <path d="M155 110 L140 145 H170 Z M155 90 L143 120 H167 Z M155 75 L148 98 H162 Z" fill="#2D5A43" />
        <rect x="153" y="145" width="4" height="12" fill="#623F31" />

        {/* Center Wooden Cottage */}
        {/* Roof */}
        <path d="M100 80 L65 115 H135 Z" fill="#8B5A2B" stroke="#623F31" strokeWidth="2" />
        <path d="M100 85 L73 112 H127 Z" fill="#C28E5C" />
        {/* Cottage Walls */}
        <rect x="73" y="112" width="54" height="38" fill="#D1AB80" stroke="#623F31" strokeWidth="2" />
        {/* Door */}
        <rect x="94" y="126" width="12" height="24" rx="2" fill="#623F31" />
        {/* Window */}
        <rect x="80" y="122" width="10" height="10" fill="#F59E0B" stroke="#623F31" strokeWidth="1" />
        <line x1="85" y1="122" x2="85" y2="132" stroke="#623F31" />
        <line x1="80" y1="127" x2="90" y2="127" stroke="#623F31" />

        {/* Winding Dniester River / Stream (Foreground) */}
        <path 
          d="M 50 152 Q 75 142 100 152 T 150 152 Q 130 172 100 162 T 50 152 Z" 
          fill="#0284C7" 
          opacity="0.85" 
        />
        
        {/* Steaming Coffee / Soup Cup (Foreground Center Badge) */}
        <g transform="translate(85, 142)">
          {/* Steam Lines */}
          <path d="M8 3 Q10 -3 8 -8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.9">
            <animate attributeName="d" values="M8 3 Q10 -3 8 -8; M8 3 Q6 -3 8 -8; M8 3 Q10 -3 8 -8" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M18 3 Q16 -3 18 -8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.9">
            <animate attributeName="d" values="M18 3 Q16 -3 18 -8; M18 3 Q20 -3 18 -8; M18 3 Q16 -3 18 -8" dur="2.5s" repeatCount="indefinite" />
          </path>
          {/* Cup Body */}
          <rect x="3" y="5" width="22" height="16" rx="4" fill="#1B3B2B" stroke="#F59E0B" strokeWidth="2" />
          {/* Handle */}
          <path d="M25 8 C29 8 29 16 25 16" fill="none" stroke="#F59E0B" strokeWidth="2" />
        </g>

        {/* Location Tagline Text at Bottom Arc */}
        <path id="subTextArc" d="M 160 120 A 70 70 0 0 1 40 120" fill="none" />
        <text className="font-sans font-semibold text-[9px]" fill={isDark ? '#E1EFE6' : '#2D5A43'} letterSpacing="1.5">
          <textPath href="#subTextArc" startOffset="50%" textAnchor="middle">
            БАКОТА • СТАРА УШИЦЯ
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading font-extrabold text-xl leading-none tracking-tight ${isDark ? 'text-white' : 'text-forest-900'}`}>
            Садиба <span className="text-amber-600">під лісом</span>
          </span>
          <span className={`text-[11px] font-medium tracking-widest uppercase mt-0.5 ${isDark ? 'text-forest-200' : 'text-forest-600'}`}>
            Курорт Бакота • Кафе & Номери
          </span>
        </div>
      )}
    </div>
  );
};
