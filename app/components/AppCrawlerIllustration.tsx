export default function AppCrawlerIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-xs sm:max-w-md md:max-w-2xl"
    >
      <defs>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" stopOpacity="0" />
          <stop offset="50%" stopColor="#00b4d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* LEFT: Code Editor Window */}
      <g id="code-editor">
        {/* Editor frame */}
        <rect x="20" y="60" width="220" height="280" rx="8" fill="#0D2850" stroke="#0077b6" strokeWidth="2"/>
        
        {/* Editor header */}
        <rect x="20" y="60" width="220" height="30" rx="8" fill="#0A1F44"/>
        <rect x="20" y="82" width="220" height="8" fill="#0D2850"/>
        
        {/* Editor title dots */}
        <circle cx="35" cy="75" r="4" fill="#ff5f56"/>
        <circle cx="50" cy="75" r="4" fill="#ffbd2e"/>
        <circle cx="65" cy="75" r="4" fill="#27c93f"/>
        
        {/* Code lines - typing effect via CSS animation */}
        <g className="code-lines">
          <rect x="35" y="105" width="140" height="3" rx="1.5" fill="#48cae4" opacity="0.9">
            <animate attributeName="width" from="0" to="140" dur="0.5s" fill="freeze"/>
          </rect>
          <rect x="35" y="120" width="180" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="180" dur="0.5s" begin="0.2s" fill="freeze"/>
          </rect>
          <rect x="50" y="135" width="160" height="3" rx="1.5" fill="#00b4d8" opacity="0.7">
            <animate attributeName="width" from="0" to="160" dur="0.5s" begin="0.4s" fill="freeze"/>
          </rect>
          <rect x="50" y="150" width="140" height="3" rx="1.5" fill="#48cae4" opacity="0.8">
            <animate attributeName="width" from="0" to="140" dur="0.5s" begin="0.6s" fill="freeze"/>
          </rect>
          <rect x="35" y="165" width="100" height="3" rx="1.5" fill="#0096c7" opacity="0.7">
            <animate attributeName="width" from="0" to="100" dur="0.5s" begin="0.8s" fill="freeze"/>
          </rect>
          <rect x="35" y="185" width="170" height="3" rx="1.5" fill="#00b4d8" opacity="0.9">
            <animate attributeName="width" from="0" to="170" dur="0.5s" begin="1s" fill="freeze"/>
          </rect>
          <rect x="50" y="200" width="150" height="3" rx="1.5" fill="#48cae4" opacity="0.7">
            <animate attributeName="width" from="0" to="150" dur="0.5s" begin="1.2s" fill="freeze"/>
          </rect>
          <rect x="50" y="215" width="130" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="130" dur="0.5s" begin="1.4s" fill="freeze"/>
          </rect>
          <rect x="35" y="230" width="160" height="3" rx="1.5" fill="#00b4d8" opacity="0.8">
            <animate attributeName="width" from="0" to="160" dur="0.5s" begin="1.6s" fill="freeze"/>
          </rect>
          <rect x="35" y="250" width="140" height="3" rx="1.5" fill="#48cae4" opacity="0.7">
            <animate attributeName="width" from="0" to="140" dur="0.5s" begin="1.8s" fill="freeze"/>
          </rect>
          <rect x="50" y="265" width="120" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="120" dur="0.5s" begin="2s" fill="freeze"/>
          </rect>
        </g>
      </g>

      {/* CENTER: Scanning Beam Animation - Overlays code editor */}
      <g id="scan-beam">
        {/* Scanning bar that sweeps down the code */}
        <rect x="20" y="90" width="220" height="8" fill="url(#scanGradient)" opacity="0.5" filter="url(#glow)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 250"
            dur="2.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        
        {/* Arrow particles flying from editor to graph */}
        <path d="M 250 120 L 260 125 L 250 130 Z" fill="#00b4d8" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="120 0"
            dur="1.4s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="1.4s" repeatCount="indefinite"/>
        </path>
        <path d="M 250 180 L 260 185 L 250 190 Z" fill="#48cae4" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="120 0"
            dur="1.4s"
            begin="0.35s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="1.4s" begin="0.35s" repeatCount="indefinite"/>
        </path>
        <path d="M 250 240 L 260 245 L 250 250 Z" fill="#0096c7" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="120 0"
            dur="1.4s"
            begin="0.7s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="1.4s" begin="0.7s" repeatCount="indefinite"/>
        </path>
      </g>

      {/* RIGHT: Output Graph - Force-directed style with curved edges */}
      <g id="output-graph">
        {/* Graph container */}
        <rect x="380" y="60" width="200" height="280" rx="8" fill="#0D2850" stroke="#0077b6" strokeWidth="2" opacity="0.5"/>
        
        {/* Connection paths - curved bezier edges for organic feel */}
        {/* H to S */}
        <path d="M 475 110 Q 430 130 415 165" stroke="#00b4d8" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="1.5s" begin="0s" repeatCount="indefinite"/>
        </path>
        
        {/* H to P */}
        <path d="M 485 115 Q 510 135 520 170" stroke="#00b4d8" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
        </path>
        
        {/* H to D */}
        <path d="M 470 125 Q 455 160 445 205" stroke="#00b4d8" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
        </path>
        
        {/* S to D - cross connection */}
        <path d="M 425 180 Q 435 195 440 210" stroke="#48cae4" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
        </path>
        
        {/* D to A */}
        <path d="M 440 225 Q 420 245 410 265" stroke="#48cae4" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.8s" begin="0.8s" repeatCount="indefinite"/>
        </path>
        
        {/* D to C */}
        <path d="M 455 225 Q 490 245 505 265" stroke="#48cae4" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.8s" begin="1s" repeatCount="indefinite"/>
        </path>

        {/* Node: Home (hub node - upper center, slightly offset) */}
        <circle cx="475" cy="110" r="18" fill="#0077b6" opacity="1" filter="url(#glow)">
          <animate attributeName="r" values="18;19;18" dur="1.5s" begin="0s" repeatCount="indefinite"/>
        </circle>
        <text x="475" y="116" textAnchor="middle" fill="#F8FAFF" fontSize="11" fontWeight="bold" opacity="1">
          H
        </text>

        {/* Node: Settings (mid-left, organic position) */}
        <circle cx="415" cy="175" r="14" fill="#0096c7" opacity="1">
          <animate attributeName="r" values="14;15;14" dur="1.7s" begin="0.2s" repeatCount="indefinite"/>
        </circle>
        <text x="415" y="180" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="1">
          S
        </text>

        {/* Node: Profile (mid-right, organic position) */}
        <circle cx="525" cy="180" r="14" fill="#0096c7" opacity="1">
          <animate attributeName="r" values="14;15;14" dur="1.6s" begin="0.4s" repeatCount="indefinite"/>
        </circle>
        <text x="525" y="185" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="1">
          P
        </text>

        {/* Node: Detail (lower-center, offset left) */}
        <circle cx="445" cy="218" r="15" fill="#00b4d8" opacity="1">
          <animate attributeName="r" values="15;16;15" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
        </circle>
        <text x="445" y="223" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="1">
          D
        </text>

        {/* Node: About (bottom-left) */}
        <circle cx="408" cy="275" r="12" fill="#48cae4" opacity="0.9">
          <animate attributeName="r" values="12;13;12" dur="1.9s" begin="0.8s" repeatCount="indefinite"/>
        </circle>
        <text x="408" y="279" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold" opacity="1">
          A
        </text>

        {/* Node: Cart (bottom-right, offset) */}
        <circle cx="510" cy="272" r="12" fill="#48cae4" opacity="0.9">
          <animate attributeName="r" values="12;13;12" dur="1.6s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <text x="510" y="276" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold" opacity="1">
          C
        </text>
      </g>


      {/* Sparkle particles for visual appeal */}
      <g className="sparkles">
        <circle cx="270" cy="100" r="2" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="340" cy="150" r="2" fill="#00b4d8" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="1.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="270" cy="200" r="2" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="2.1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="340" cy="250" r="2" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="2.4s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  );
}
