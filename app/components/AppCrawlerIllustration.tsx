export default function AppCrawlerIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-2xl"
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
            <animate attributeName="width" from="0" to="140" dur="0.8s" fill="freeze"/>
          </rect>
          <rect x="35" y="120" width="180" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="180" dur="0.8s" begin="0.3s" fill="freeze"/>
          </rect>
          <rect x="50" y="135" width="160" height="3" rx="1.5" fill="#00b4d8" opacity="0.7">
            <animate attributeName="width" from="0" to="160" dur="0.8s" begin="0.6s" fill="freeze"/>
          </rect>
          <rect x="50" y="150" width="140" height="3" rx="1.5" fill="#48cae4" opacity="0.8">
            <animate attributeName="width" from="0" to="140" dur="0.8s" begin="0.9s" fill="freeze"/>
          </rect>
          <rect x="35" y="165" width="100" height="3" rx="1.5" fill="#0096c7" opacity="0.7">
            <animate attributeName="width" from="0" to="100" dur="0.8s" begin="1.2s" fill="freeze"/>
          </rect>
          <rect x="35" y="185" width="170" height="3" rx="1.5" fill="#00b4d8" opacity="0.9">
            <animate attributeName="width" from="0" to="170" dur="0.8s" begin="1.5s" fill="freeze"/>
          </rect>
          <rect x="50" y="200" width="150" height="3" rx="1.5" fill="#48cae4" opacity="0.7">
            <animate attributeName="width" from="0" to="150" dur="0.8s" begin="1.8s" fill="freeze"/>
          </rect>
          <rect x="50" y="215" width="130" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="130" dur="0.8s" begin="2.1s" fill="freeze"/>
          </rect>
          <rect x="35" y="230" width="160" height="3" rx="1.5" fill="#00b4d8" opacity="0.8">
            <animate attributeName="width" from="0" to="160" dur="0.8s" begin="2.4s" fill="freeze"/>
          </rect>
          <rect x="35" y="250" width="140" height="3" rx="1.5" fill="#48cae4" opacity="0.7">
            <animate attributeName="width" from="0" to="140" dur="0.8s" begin="2.7s" fill="freeze"/>
          </rect>
          <rect x="50" y="265" width="120" height="3" rx="1.5" fill="#0096c7" opacity="0.8">
            <animate attributeName="width" from="0" to="120" dur="0.8s" begin="3s" fill="freeze"/>
          </rect>
        </g>
      </g>

      {/* CENTER: Scanning Beam Animation */}
      <g id="scan-beam">
        <rect x="250" y="60" width="80" height="8" fill="url(#scanGradient)" opacity="0.6" filter="url(#glow)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 280"
            dur="3.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        
        {/* Arrow particles */}
        <path d="M 280 120 L 290 125 L 280 130 Z" fill="#00b4d8" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="100 0"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 280 180 L 290 185 L 280 190 Z" fill="#48cae4" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="100 0"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </path>
        <path d="M 280 240 L 290 245 L 280 250 Z" fill="#0096c7" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="100 0"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="1s" repeatCount="indefinite"/>
        </path>
      </g>

      {/* RIGHT: Output Graph - Nodes appear sequentially */}
      <g id="output-graph">
        {/* Graph container */}
        <rect x="380" y="60" width="200" height="280" rx="8" fill="#0D2850" stroke="#0077b6" strokeWidth="2" opacity="0.5"/>
        
        {/* Connection lines - appear before nodes */}
        <line x1="460" y1="120" x2="460" y2="160" stroke="#00b4d8" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin="4s" fill="freeze"/>
        </line>
        <line x1="460" y1="120" x2="520" y2="160" stroke="#00b4d8" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin="4.3s" fill="freeze"/>
        </line>
        <line x1="460" y1="120" x2="400" y2="160" stroke="#00b4d8" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin="4.6s" fill="freeze"/>
        </line>
        <line x1="460" y1="200" x2="520" y2="240" stroke="#48cae4" strokeWidth="1.5" opacity="0">
          <animate attributeName="opacity" from="0" to="0.5" dur="0.5s" begin="5.2s" fill="freeze"/>
        </line>
        <line x1="460" y1="200" x2="400" y2="240" stroke="#48cae4" strokeWidth="1.5" opacity="0">
          <animate attributeName="opacity" from="0" to="0.5" dur="0.5s" begin="5.5s" fill="freeze"/>
        </line>

        {/* Node: Home (top center) */}
        <circle cx="460" cy="120" r="16" fill="#0077b6" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.8s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="3.8s"
            additive="sum"
          />
        </circle>
        <text x="460" y="125" textAnchor="middle" fill="#F8FAFF" fontSize="10" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.8s" fill="freeze"/>
          H
        </text>

        {/* Node: Profile (right) */}
        <circle cx="520" cy="170" r="14" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.3s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="4.3s"
            additive="sum"
          />
        </circle>
        <text x="520" y="174" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.3s" fill="freeze"/>
          P
        </text>

        {/* Node: Settings (left) */}
        <circle cx="400" cy="170" r="14" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.6s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="4.6s"
            additive="sum"
          />
        </circle>
        <text x="400" y="174" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.6s" fill="freeze"/>
          S
        </text>

        {/* Node: Detail (center) */}
        <circle cx="460" cy="200" r="14" fill="#00b4d8" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.9s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="4.9s"
            additive="sum"
          />
        </circle>
        <text x="460" y="204" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="4.9s" fill="freeze"/>
          D
        </text>

        {/* Node: Cart (bottom right) */}
        <circle cx="520" cy="250" r="12" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="0.9" dur="0.5s" begin="5.2s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="5.2s"
            additive="sum"
          />
        </circle>
        <text x="520" y="254" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="5.2s" fill="freeze"/>
          C
        </text>

        {/* Node: About (bottom left) */}
        <circle cx="400" cy="250" r="12" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="0.9" dur="0.5s" begin="5.5s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="scale"
            from="0 0"
            to="1 1"
            dur="0.5s"
            begin="5.5s"
            additive="sum"
          />
        </circle>
        <text x="400" y="254" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="5.5s" fill="freeze"/>
          A
        </text>
      </g>


      {/* Sparkle particles for visual appeal */}
      <g className="sparkles">
        <circle cx="270" cy="100" r="2" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="340" cy="150" r="2" fill="#00b4d8" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="270" cy="200" r="2" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="340" cy="250" r="2" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="3.5s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  );
}
