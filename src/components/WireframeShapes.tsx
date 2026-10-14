import React from 'react';

/**
 * High-precision vector wireframe geometric shapes on pure dark background
 * (Thin white lines, technical coordinates, isometric grid meshes).
 */

// Glifo do WhatsApp, para os botoes que abrem a conversa
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
);

// Logo da ARD. A versão branca com dourado (sem fundo) é para fundos escuros;
// a versão com fundo azul-marinho fica em /assets/ard-logo-fundo.png para fundos claros.
export const ARDLogo: React.FC<{ className?: string; variant?: 'escuro' | 'claro' }> = ({ className = "", variant = 'escuro' }) => {
  return (
    <div className={`flex items-center cursor-pointer group select-none ${className}`}>
      <img
        src={variant === 'escuro' ? '/assets/ard-logo-branca.png' : '/assets/ard-logo-fundo.png'}
        alt="ARD Topografia e Agrimensura"
        className="h-12 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

// 01 Residencial: Wireframe 3D Loteamento & Casa Isométrica
export const ResidencialWireframe: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base Grid Plane */}
      <polygon points="70,95 125,70 70,45 15,70" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <polygon points="70,120 125,95 70,70 15,95" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
      
      {/* Ground Subdivisions / Lots */}
      <line x1="42" y1="57" x2="97" y2="82" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.3" />
      <line x1="97" y1="57" x2="42" y2="82" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.3" />

      {/* House Wireframe Volume */}
      {/* Walls */}
      <polygon points="50,75 70,85 70,55 50,45" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
      <polygon points="70,85 90,75 90,45 70,55" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
      
      {/* Roof Gable */}
      <polygon points="50,45 60,30 70,55" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
      <polygon points="60,30 80,30 90,45 70,55" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
      <line x1="60" y1="30" x2="80" y2="30" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="1" />

      {/* Measurement coordinate pins */}
      <circle cx="50" cy="75" r="1.5" fill="#FFFFFF" />
      <circle cx="70" cy="85" r="1.5" fill="#FFFFFF" />
      <circle cx="90" cy="75" r="1.5" fill="#FFFFFF" />
      <circle cx="60" cy="30" r="1.5" fill="#FFFFFF" />
      <circle cx="80" cy="30" r="1.5" fill="#FFFFFF" />

      {/* Elevation Line Marker */}
      <line x1="70" y1="85" x2="70" y2="115" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 1.5" strokeOpacity="0.5" />
    </svg>
  );
};

// 02 Comercial: Wireframe 3D Torre / Estrutura Comercial Multi-Pavimento
export const ComercialWireframe: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base Grid */}
      <polygon points="70,115 115,95 70,75 25,95" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />

      {/* Building 1 (Tower) */}
      {/* Floor Slabs */}
      <polygon points="60,85 85,75 85,25 60,35" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
      <polygon points="85,75 110,85 110,35 85,25" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
      <polygon points="60,35 85,25 110,35 85,45" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />

      {/* Floor Levels wireframe lines */}
      <line x1="60" y1="47" x2="85" y2="57" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="85" y1="57" x2="110" y2="47" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="60" y1="60" x2="85" y2="70" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="85" y1="70" x2="110" y2="60" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="60" y1="72" x2="85" y2="82" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="85" y1="82" x2="110" y2="72" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Adjacent Lower Pavilion */}
      <polygon points="35,95 60,85 60,55 35,65" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.75" fill="none" />
      <polygon points="35,65 60,55 85,65 60,75" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.6" fill="none" />

      {/* Survey Axis Indicator */}
      <line x1="85" y1="15" x2="85" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="85" cy="15" r="2" fill="#FFFFFF" />
    </svg>
  );
};

// 03 Industrial: Wireframe 3D Galpão & Complexo Geodésico
export const IndustrialWireframe: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Foundation Grid */}
      <polygon points="70,115 130,90 70,65 10,90" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />

      {/* Warehouse Facet A */}
      <polygon points="25,85 70,105 70,65 25,45" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
      
      {/* Warehouse Facet B */}
      <polygon points="70,105 115,85 115,45 70,65" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />

      {/* Truss / Shed Roof Wireframe */}
      <polygon points="25,45 45,30 70,40 25,45" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" fill="none" />
      <polygon points="70,40 95,25 115,45 70,40" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" fill="none" />
      <line x1="45" y1="30" x2="95" y2="25" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="1" />

      {/* Internal Structural Trusses */}
      <line x1="25" y1="45" x2="70" y2="65" stroke="#FFFFFF" strokeWidth="0.7" strokeDasharray="2 2" strokeOpacity="0.4" />
      <line x1="45" y1="30" x2="70" y2="65" stroke="#FFFFFF" strokeWidth="0.7" strokeDasharray="2 2" strokeOpacity="0.4" />
      <line x1="95" y1="25" x2="70" y2="65" stroke="#FFFFFF" strokeWidth="0.7" strokeDasharray="2 2" strokeOpacity="0.4" />

      {/* Chimney / Silo Cylinder Wireframe */}
      <ellipse cx="105" cy="30" rx="6" ry="2.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="99" y1="30" x2="99" y2="55" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="111" y1="30" x2="111" y2="55" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />

      {/* Target Points */}
      <circle cx="25" cy="85" r="1.5" fill="#FFFFFF" />
      <circle cx="70" cy="105" r="1.5" fill="#FFFFFF" />
      <circle cx="115" cy="85" r="1.5" fill="#FFFFFF" />
      <circle cx="95" cy="25" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};

// Sobre Nós: Grande Malha de Relevo Topográfico 3D (TIN / Contour Lines Wireframe)
export const TopoMeshWireframe: React.FC<{ className?: string }> = ({ className = "w-full h-80" }) => {
  return (
    <svg
      viewBox="0 0 600 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="topo-wireframe-mesh"
    >
      <defs>
        <linearGradient id="topoLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Background Iso Grid */}
      <g stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="0.7">
        <line x1="50" y1="320" x2="550" y2="320" />
        <line x1="50" y1="280" x2="550" y2="280" />
        <line x1="50" y1="240" x2="550" y2="240" />
        <line x1="100" y1="200" x2="500" y2="200" />
      </g>

      {/* Contour Lines Wireframe (Níveis de relevo) */}
      <path
        d="M 60,300 C 140,290 200,310 280,295 C 360,280 440,305 540,290"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.25"
      />
      <path
        d="M 80,260 C 160,240 220,270 300,245 C 380,220 460,255 520,240"
        stroke="#FFFFFF"
        strokeWidth="0.9"
        strokeOpacity="0.35"
      />
      <path
        d="M 110,210 C 180,180 250,220 320,190 C 390,160 450,200 490,180"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M 150,155 C 210,125 270,165 340,135 C 400,105 440,140 460,125"
        stroke="#FFFFFF"
        strokeWidth="1.1"
        strokeOpacity="0.7"
      />
      <path
        d="M 210,105 C 260,85 300,110 350,90 C 390,75 410,95 420,85"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeOpacity="0.9"
      />

      {/* Triangulated Irregular Network (TIN Mesh Topográfica) */}
      <g stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.65">
        {/* Ridge Peak 1 */}
        <line x1="300" y1="60" x2="220" y2="110" />
        <line x1="300" y1="60" x2="360" y2="100" />
        <line x1="300" y1="60" x2="280" y2="130" />
        <line x1="360" y1="100" x2="420" y2="90" />
        <line x1="360" y1="100" x2="400" y2="150" />
        <line x1="220" y1="110" x2="160" y2="160" />
        <line x1="220" y1="110" x2="260" y2="170" />
        <line x1="280" y1="130" x2="260" y2="170" />
        <line x1="280" y1="130" x2="340" y2="180" />
        <line x1="360" y1="100" x2="340" y2="180" />
        <line x1="400" y1="150" x2="460" y2="140" />
        <line x1="400" y1="150" x2="340" y2="180" />
        <line x1="400" y1="150" x2="430" y2="210" />
        <line x1="460" y1="140" x2="500" y2="190" />

        {/* Mid Slopes */}
        <line x1="160" y1="160" x2="110" y2="220" />
        <line x1="160" y1="160" x2="190" y2="230" />
        <line x1="260" y1="170" x2="190" y2="230" />
        <line x1="260" y1="170" x2="270" y2="240" />
        <line x1="340" y1="180" x2="270" y2="240" />
        <line x1="340" y1="180" x2="350" y2="250" />
        <line x1="430" y1="210" x2="350" y2="250" />
        <line x1="430" y1="210" x2="450" y2="260" />
        <line x1="500" y1="190" x2="450" y2="260" />
        <line x1="500" y1="190" x2="530" y2="250" />

        {/* Base Valleys */}
        <line x1="110" y1="220" x2="70" y2="290" />
        <line x1="110" y1="220" x2="140" y2="290" />
        <line x1="190" y1="230" x2="140" y2="290" />
        <line x1="190" y1="230" x2="210" y2="300" />
        <line x1="270" y1="240" x2="210" y2="300" />
        <line x1="270" y1="240" x2="290" y2="305" />
        <line x1="350" y1="250" x2="290" y2="305" />
        <line x1="350" y1="250" x2="370" y2="300" />
        <line x1="450" y1="260" x2="370" y2="300" />
        <line x1="450" y1="260" x2="460" y2="305" />
        <line x1="530" y1="250" x2="460" y2="305" />
        <line x1="530" y1="250" x2="540" y2="300" />
      </g>

      {/* Survey Station Marker & Target Coordinates */}
      {/* Peak Station */}
      <circle cx="300" cy="60" r="4" fill="#FFFFFF" />
      <circle cx="300" cy="60" r="9" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="300" y1="45" x2="300" y2="75" stroke="#FFFFFF" strokeWidth="0.8" />
      <line x1="285" y1="60" x2="315" y2="60" stroke="#FFFFFF" strokeWidth="0.8" />

      {/* Measurement Nodes */}
      <circle cx="220" cy="110" r="2.5" fill="#FFFFFF" />
      <circle cx="360" cy="100" r="2.5" fill="#FFFFFF" />
      <circle cx="280" cy="130" r="2" fill="#FFFFFF" />
      <circle cx="400" cy="150" r="2.5" fill="#FFFFFF" />
      <circle cx="160" cy="160" r="2" fill="#FFFFFF" />
      <circle cx="260" cy="170" r="2.5" fill="#FFFFFF" />
      <circle cx="340" cy="180" r="2.5" fill="#FFFFFF" />
      <circle cx="430" cy="210" r="2.5" fill="#FFFFFF" />
      <circle cx="190" cy="230" r="2" fill="#FFFFFF" />
      <circle cx="270" cy="240" r="2" fill="#FFFFFF" />
      <circle cx="350" cy="250" r="2" fill="#FFFFFF" />
      <circle cx="450" cy="260" r="2" fill="#FFFFFF" />

      {/* Technical Axis & Datum Callouts */}
      <g fill="#FFFFFF" fillOpacity="0.8" fontSize="9" fontFamily="'DM Sans', sans-serif">
        <text x="316" y="55" fontWeight="600">STN-01 [Z: +184.20m]</text>
        <text x="75" y="280" opacity="0.6">N: 6.702.418</text>
        <text x="470" y="295" opacity="0.6">E: 479.312</text>
        <text x="50" y="50" opacity="0.5">SIRGAS 2000 / UTM 22S</text>
      </g>
    </svg>
  );
};

// 01 Diferencial: Selo de Garantia 100% / Poliedro de Precisão
export const GuaranteeWireframe: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Concentric Geometric Rings */}
      <circle cx="50" cy="50" r="42" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="36" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
      <circle cx="50" cy="50" r="26" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
      
      {/* Precision Crosshair */}
      <line x1="50" y1="8" x2="50" y2="92" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.4" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.4" />

      {/* Octagon Wireframe */}
      <polygon points="50,18 73,27 82,50 73,73 50,82 27,73 18,50 27,27" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
      
      {/* Center 100% Target */}
      <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
    </svg>
  );
};

// 02 Diferencial: Estação Total / Teodolito Topográfico Wireframe
export const TheodoliteWireframe: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tripod Legs */}
      <line x1="50" y1="56" x2="20" y2="92" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
      <line x1="50" y1="56" x2="50" y2="95" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="50" y1="56" x2="80" y2="92" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
      
      {/* Tripod Head Base */}
      <polygon points="40,56 60,56 55,62 45,62" stroke="#FFFFFF" strokeWidth="1" fill="none" />

      {/* Tribrach & Body */}
      <rect x="42" y="38" width="16" height="18" rx="2" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      <line x1="42" y1="46" x2="58" y2="46" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />

      {/* Optical Telescope */}
      <polygon points="28,26 72,26 66,38 34,38" stroke="#FFFFFF" strokeWidth="1.3" fill="none" />
      <ellipse cx="28" cy="32" rx="2" ry="6" stroke="#FFFFFF" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.2" />
      <ellipse cx="72" cy="32" rx="2" ry="6" stroke="#FFFFFF" strokeWidth="1" />

      {/* Laser Emission Beam */}
      <line x1="72" y1="32" x2="94" y2="32" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <circle cx="94" cy="32" r="1.5" fill="#FFFFFF" />

      {/* Vertices */}
      <circle cx="50" cy="20" r="1.5" fill="#FFFFFF" />
      <circle cx="50" cy="56" r="2" fill="#FFFFFF" />
    </svg>
  );
};

// 03 Diferencial: Estrutura Geodésica 10+ Anos (Icosaedro / Solidez)
export const GeodesicWireframe: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Hexagon */}
      <polygon points="50,12 85,30 85,70 50,88 15,70 15,30" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      
      {/* Inner Triangulated Nodes */}
      <line x1="50" y1="12" x2="50" y2="88" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="15" y1="30" x2="85" y2="70" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="15" y1="70" x2="85" y2="30" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Center 3D Crystal Core */}
      <polygon points="50,28 72,40 72,62 50,74 28,62 28,40" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" fill="none" />
      <line x1="50" y1="28" x2="50" y2="51" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="72" y1="40" x2="50" y2="51" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="28" y1="40" x2="50" y2="51" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="50" y1="74" x2="50" y2="51" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 1.5" strokeOpacity="0.5" />

      {/* Node highlights */}
      <circle cx="50" cy="12" r="2" fill="#FFFFFF" />
      <circle cx="85" cy="30" r="1.5" fill="#FFFFFF" />
      <circle cx="85" cy="70" r="1.5" fill="#FFFFFF" />
      <circle cx="50" cy="88" r="2" fill="#FFFFFF" />
      <circle cx="15" cy="70" r="1.5" fill="#FFFFFF" />
      <circle cx="15" cy="30" r="1.5" fill="#FFFFFF" />
      <circle cx="50" cy="51" r="2.5" fill="#FFFFFF" />
    </svg>
  );
};

// 04 Diferencial: Cronograma / Eixos Coordenados e Prazos
export const TimelineWireframe: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Coordinate axes */}
      <line x1="16" y1="84" x2="88" y2="84" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
      <line x1="16" y1="84" x2="16" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
      <polyline points="12,22 16,14 20,22" stroke="#FFFFFF" strokeWidth="1.2" />
      <polyline points="82,80 90,84 82,88" stroke="#FFFFFF" strokeWidth="1.2" />

      {/* Timeline Project Flow with Checkpoints */}
      <polyline
        points="16,74 38,58 60,64 84,28"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Drop Projection Lines */}
      <line x1="38" y1="58" x2="38" y2="84" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.4" />
      <line x1="60" y1="64" x2="60" y2="84" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.4" />
      <line x1="84" y1="28" x2="84" y2="84" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.4" />

      {/* Checkpoint Nodes */}
      <circle cx="16" cy="74" r="2" fill="#FFFFFF" />
      <circle cx="38" cy="58" r="2.5" fill="#FFFFFF" />
      <circle cx="60" cy="64" r="2.5" fill="#FFFFFF" />
      <circle cx="84" cy="28" r="3.5" fill="#FFFFFF" />
      <circle cx="84" cy="28" r="7" stroke="#FFFFFF" strokeWidth="0.9" strokeDasharray="2 2" />
    </svg>
  );
};
