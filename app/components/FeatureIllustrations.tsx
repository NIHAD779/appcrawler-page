// Codebase Analysis Illustration - File tree expanding with scan effects
export function CodebaseAnalysisIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-sm"
    >
      <defs>
        <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#48cae4" stopOpacity="1" />
          <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Folder icon */}
      <path d="M 40 60 L 40 240 L 260 240 L 260 90 L 140 90 L 120 60 Z" 
        fill="#0D2850" stroke="#0077b6" strokeWidth="2" opacity="0.6"/>

      {/* File tree items - expanding animation */}
      <g className="file-tree">
        {/* Level 1 */}
        <rect x="60" y="90" width="8" height="8" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.5s" fill="freeze"/>
        </rect>
        <rect x="75" y="92" width="80" height="4" rx="2" fill="#0096c7" opacity="0">
          <animate attributeName="width" from="0" to="80" dur="0.5s" begin="0.5s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.5s" fill="freeze"/>
        </rect>

        {/* Level 2 */}
        <rect x="60" y="110" width="8" height="8" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze"/>
        </rect>
        <rect x="75" y="112" width="90" height="4" rx="2" fill="#00b4d8" opacity="0">
          <animate attributeName="width" from="0" to="90" dur="0.5s" begin="0.8s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="0.8s" fill="freeze"/>
        </rect>

        {/* Nested Level 2.1 */}
        <rect x="80" y="130" width="6" height="6" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.1s" fill="freeze"/>
        </rect>
        <rect x="92" y="132" width="70" height="3" rx="1.5" fill="#48cae4" opacity="0">
          <animate attributeName="width" from="0" to="70" dur="0.5s" begin="1.1s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.8" dur="0.3s" begin="1.1s" fill="freeze"/>
        </rect>

        {/* Nested Level 2.2 */}
        <rect x="80" y="145" width="6" height="6" fill="#0096c7" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze"/>
        </rect>
        <rect x="92" y="147" width="75" height="3" rx="1.5" fill="#48cae4" opacity="0">
          <animate attributeName="width" from="0" to="75" dur="0.5s" begin="1.4s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.8" dur="0.3s" begin="1.4s" fill="freeze"/>
        </rect>

        {/* Level 3 */}
        <rect x="60" y="165" width="8" height="8" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.7s" fill="freeze"/>
        </rect>
        <rect x="75" y="167" width="85" height="4" rx="2" fill="#0096c7" opacity="0">
          <animate attributeName="width" from="0" to="85" dur="0.5s" begin="1.7s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="1.7s" fill="freeze"/>
        </rect>

        {/* Level 4 */}
        <rect x="60" y="185" width="8" height="8" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2s" fill="freeze"/>
        </rect>
        <rect x="75" y="187" width="95" height="4" rx="2" fill="#00b4d8" opacity="0">
          <animate attributeName="width" from="0" to="95" dur="0.5s" begin="2s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="2s" fill="freeze"/>
        </rect>

        {/* Level 5 */}
        <rect x="60" y="205" width="8" height="8" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.3s" fill="freeze"/>
        </rect>
        <rect x="75" y="207" width="80" height="4" rx="2" fill="#0096c7" opacity="0">
          <animate attributeName="width" from="0" to="80" dur="0.5s" begin="2.3s" fill="freeze"/>
          <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin="2.3s" fill="freeze"/>
        </rect>
      </g>

      {/* Sparkle particles flying off scanned files */}
      <circle cx="160" cy="93" r="3" fill="url(#sparkleGrad)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="0.7s" fill="freeze"/>
        <animateTransform attributeName="transform" type="translate" 
          from="0 0" to="20 -15" dur="0.8s" begin="0.7s" fill="freeze"/>
      </circle>
      <circle cx="170" cy="113" r="3" fill="url(#sparkleGrad)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="1s" fill="freeze"/>
        <animateTransform attributeName="transform" type="translate" 
          from="0 0" to="25 -10" dur="0.8s" begin="1s" fill="freeze"/>
      </circle>
      <circle cx="165" cy="168" r="3" fill="url(#sparkleGrad)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="1.9s" fill="freeze"/>
        <animateTransform attributeName="transform" type="translate" 
          from="0 0" to="20 -12" dur="0.8s" begin="1.9s" fill="freeze"/>
      </circle>
      <circle cx="175" cy="188" r="3" fill="url(#sparkleGrad)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="2.2s" fill="freeze"/>
        <animateTransform attributeName="transform" type="translate" 
          from="0 0" to="22 -18" dur="0.8s" begin="2.2s" fill="freeze"/>
      </circle>

      {/* Scan line moving down */}
      <rect x="50" y="80" width="200" height="2" fill="#00b4d8" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" 
          from="0 0" to="0 140" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

// Output Formats Illustration - Morphing between table, graph, mermaid
export function OutputFormatsIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-sm"
    >
      {/* Container */}
      <rect x="30" y="40" width="240" height="220" rx="12" 
        fill="#0D2850" stroke="#0077b6" strokeWidth="2" opacity="0.5"/>

      {/* Table View - visible first */}
      <g id="table-view" opacity="1">
        <animate attributeName="opacity" values="1;1;0;0;0;0;1;1" 
          dur="9s" repeatCount="indefinite"/>
        
        {/* Table header */}
        <rect x="50" y="60" width="200" height="25" fill="#0077b6" opacity="0.3"/>
        <rect x="55" y="67" width="60" height="3" rx="1.5" fill="#48cae4"/>
        <rect x="125" y="67" width="50" height="3" rx="1.5" fill="#48cae4"/>
        <rect x="185" y="67" width="55" height="3" rx="1.5" fill="#48cae4"/>
        
        {/* Table rows */}
        <rect x="50" y="90" width="200" height="20" fill="#0096c7" opacity="0.15"/>
        <rect x="55" y="96" width="45" height="2.5" rx="1" fill="#0096c7"/>
        <rect x="125" y="96" width="35" height="2.5" rx="1" fill="#0096c7"/>
        <rect x="185" y="96" width="40" height="2.5" rx="1" fill="#0096c7"/>
        
        <rect x="50" y="115" width="200" height="20" fill="#00b4d8" opacity="0.15"/>
        <rect x="55" y="121" width="50" height="2.5" rx="1" fill="#00b4d8"/>
        <rect x="125" y="121" width="40" height="2.5" rx="1" fill="#00b4d8"/>
        <rect x="185" y="121" width="45" height="2.5" rx="1" fill="#00b4d8"/>
        
        <rect x="50" y="140" width="200" height="20" fill="#0096c7" opacity="0.15"/>
        <rect x="55" y="146" width="48" height="2.5" rx="1" fill="#0096c7"/>
        <rect x="125" y="146" width="38" height="2.5" rx="1" fill="#0096c7"/>
        <rect x="185" y="146" width="42" height="2.5" rx="1" fill="#0096c7"/>
        
        <rect x="50" y="165" width="200" height="20" fill="#00b4d8" opacity="0.15"/>
        <rect x="55" y="171" width="52" height="2.5" rx="1" fill="#00b4d8"/>
        <rect x="125" y="171" width="36" height="2.5" rx="1" fill="#00b4d8"/>
        <rect x="185" y="171" width="44" height="2.5" rx="1" fill="#00b4d8"/>
      </g>

      {/* Graph View - visible second */}
      <g id="graph-view" opacity="0">
        <animate attributeName="opacity" values="0;0;0;1;1;0;0;0;0" 
          dur="9s" repeatCount="indefinite"/>
        
        {/* Nodes */}
        <circle cx="150" cy="90" r="18" fill="#0077b6" stroke="#48cae4" strokeWidth="2"/>
        <circle cx="100" cy="150" r="16" fill="#0096c7" stroke="#48cae4" strokeWidth="2"/>
        <circle cx="200" cy="150" r="16" fill="#0096c7" stroke="#48cae4" strokeWidth="2"/>
        <circle cx="100" cy="210" r="14" fill="#00b4d8" stroke="#48cae4" strokeWidth="1.5"/>
        <circle cx="200" cy="210" r="14" fill="#00b4d8" stroke="#48cae4" strokeWidth="1.5"/>
        
        {/* Edges */}
        <line x1="150" y1="108" x2="100" y2="134" stroke="#00b4d8" strokeWidth="2" opacity="0.6"/>
        <line x1="150" y1="108" x2="200" y2="134" stroke="#00b4d8" strokeWidth="2" opacity="0.6"/>
        <line x1="100" y1="166" x2="100" y2="196" stroke="#48cae4" strokeWidth="1.5" opacity="0.5"/>
        <line x1="200" y1="166" x2="200" y2="196" stroke="#48cae4" strokeWidth="1.5" opacity="0.5"/>
        
        {/* Node labels */}
        <circle cx="150" cy="90" r="6" fill="#F8FAFF"/>
        <circle cx="100" cy="150" r="5" fill="#F8FAFF"/>
        <circle cx="200" cy="150" r="5" fill="#F8FAFF"/>
        <circle cx="100" cy="210" r="4" fill="#F8FAFF"/>
        <circle cx="200" cy="210" r="4" fill="#F8FAFF"/>
      </g>

      {/* Mermaid View - visible third */}
      <g id="mermaid-view" opacity="0">
        <animate attributeName="opacity" values="0;0;0;0;0;0;1;1;1" 
          dur="9s" repeatCount="indefinite"/>
        
        {/* Flowchart boxes */}
        <rect x="90" y="65" width="120" height="30" rx="4" 
          fill="none" stroke="#0077b6" strokeWidth="2"/>
        <rect x="98" y="74" width="50" height="3" rx="1.5" fill="#48cae4"/>
        
        {/* Arrow down */}
        <line x1="150" y1="95" x2="150" y2="125" stroke="#00b4d8" strokeWidth="2"/>
        <path d="M 150 125 L 145 118 L 155 118 Z" fill="#00b4d8"/>
        
        {/* Decision diamond */}
        <path d="M 150 130 L 195 155 L 150 180 L 105 155 Z" 
          fill="none" stroke="#0096c7" strokeWidth="2"/>
        <rect x="135" y="152" width="30" height="3" rx="1.5" fill="#48cae4"/>
        
        {/* Arrow left */}
        <line x1="105" y1="155" x2="70" y2="155" stroke="#00b4d8" strokeWidth="2"/>
        <path d="M 70 155 L 77 150 L 77 160 Z" fill="#00b4d8"/>
        
        {/* Arrow right */}
        <line x1="195" y1="155" x2="230" y2="155" stroke="#00b4d8" strokeWidth="2"/>
        <path d="M 230 155 L 223 150 L 223 160 Z" fill="#00b4d8"/>
        
        {/* End boxes */}
        <rect x="40" y="140" width="25" height="30" rx="12" 
          fill="none" stroke="#00b4d8" strokeWidth="2"/>
        <rect x="235" y="140" width="25" height="30" rx="12" 
          fill="none" stroke="#00b4d8" strokeWidth="2"/>
      </g>

      {/* Label */}
      <text x="150" y="245" textAnchor="middle" fill="#48cae4" fontSize="11" fontWeight="500">
        <tspan opacity="1">
          <animate attributeName="opacity" values="1;1;0;0;0;0;0;0;1" 
            dur="9s" repeatCount="indefinite"/>
          Table
        </tspan>
        <tspan opacity="0">
          <animate attributeName="opacity" values="0;0;0;1;1;0;0;0;0" 
            dur="9s" repeatCount="indefinite"/>
          Graph
        </tspan>
        <tspan opacity="0">
          <animate attributeName="opacity" values="0;0;0;0;0;0;1;1;1" 
            dur="9s" repeatCount="indefinite"/>
          Mermaid
        </tspan>
      </text>
    </svg>
  );
}

// IDE Integration Illustration - Plugin panel sliding in
export function IDEIntegrationIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-sm"
    >
      {/* IDE Window */}
      <rect x="20" y="40" width="260" height="220" rx="8" 
        fill="#0A1F44" stroke="#0077b6" strokeWidth="2"/>
      
      {/* IDE Toolbar */}
      <rect x="20" y="40" width="260" height="30" rx="8" fill="#0D2850"/>
      <rect x="20" y="62" width="260" height="8" fill="#0A1F44"/>
      
      {/* Toolbar icons */}
      <circle cx="35" cy="55" r="4" fill="#ff5f56"/>
      <circle cx="50" cy="55" r="4" fill="#ffbd2e"/>
      <circle cx="65" cy="55" r="4" fill="#27c93f"/>
      
      {/* Code editor area - left side */}
      <rect x="30" y="80" width="140" height="170" fill="#0D2850" opacity="0.3"/>
      
      {/* Code lines */}
      <rect x="40" y="95" width="80" height="2.5" rx="1" fill="#0096c7" opacity="0.7"/>
      <rect x="40" y="105" width="100" height="2.5" rx="1" fill="#00b4d8" opacity="0.6"/>
      <rect x="50" y="115" width="90" height="2.5" rx="1" fill="#48cae4" opacity="0.7"/>
      <rect x="50" y="125" width="70" height="2.5" rx="1" fill="#0096c7" opacity="0.6"/>
      <rect x="40" y="140" width="95" height="2.5" rx="1" fill="#00b4d8" opacity="0.7"/>
      <rect x="50" y="150" width="85" height="2.5" rx="1" fill="#48cae4" opacity="0.6"/>
      <rect x="50" y="160" width="75" height="2.5" rx="1" fill="#0096c7" opacity="0.7"/>
      <rect x="40" y="175" width="90" height="2.5" rx="1" fill="#00b4d8" opacity="0.6"/>

      {/* Plugin panel sliding in from right */}
      <g id="plugin-panel">
        <rect x="180" y="80" width="90" height="170" rx="4" 
          fill="#0D2850" stroke="#00b4d8" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="1s" fill="freeze"/>
        </rect>
        
        {/* Panel sliding animation via transform */}
        <animateTransform
          attributeName="transform"
          type="translate"
          from="100 0"
          to="0 0"
          dur="0.8s"
          begin="1s"
          fill="freeze"
        />

        {/* Panel header */}
        <rect x="185" y="85" width="80" height="18" rx="3" fill="#0077b6" opacity="0">
          <animate attributeName="opacity" from="0" to="0.4" dur="0.3s" begin="1.5s" fill="freeze"/>
        </rect>
        <rect x="190" y="91" width="45" height="2.5" rx="1" fill="#48cae4" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.5s" fill="freeze"/>
        </rect>
        
        {/* Results populating */}
        <g className="results" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.8s" fill="freeze"/>
          
          {/* Result items */}
          <circle cx="195" cy="120" r="6" fill="#0096c7"/>
          <rect x="205" y="117" width="50" height="2" rx="1" fill="#00b4d8"/>
          <rect x="205" y="121" width="40" height="1.5" rx="0.75" fill="#48cae4" opacity="0.6"/>
          
          <circle cx="195" cy="140" r="6" fill="#00b4d8"/>
          <rect x="205" y="137" width="45" height="2" rx="1" fill="#0096c7"/>
          <rect x="205" y="141" width="35" height="1.5" rx="0.75" fill="#48cae4" opacity="0.6"/>
          
          <circle cx="195" cy="160" r="6" fill="#0096c7"/>
          <rect x="205" y="157" width="48" height="2" rx="1" fill="#00b4d8"/>
          <rect x="205" y="161" width="42" height="1.5" rx="0.75" fill="#48cae4" opacity="0.6"/>
          
          <circle cx="195" cy="180" r="6" fill="#00b4d8"/>
          <rect x="205" y="177" width="40" height="2" rx="1" fill="#0096c7"/>
          <rect x="205" y="181" width="38" height="1.5" rx="0.75" fill="#48cae4" opacity="0.6"/>
          
          <circle cx="195" cy="200" r="6" fill="#0096c7"/>
          <rect x="205" y="197" width="46" height="2" rx="1" fill="#00b4d8"/>
          <rect x="205" y="201" width="36" height="1.5" rx="0.75" fill="#48cae4" opacity="0.6"/>
        </g>

        {/* Loading indicator before results */}
        <circle cx="225" cy="160" r="8" stroke="#00b4d8" strokeWidth="2" 
          fill="none" opacity="1" strokeDasharray="15 35">
          <animate attributeName="opacity" values="1;0" dur="0.3s" begin="1.8s" fill="freeze"/>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 225 160"
            to="360 225 160"
            dur="1s"
            begin="1s"
            repeatCount="1"
          />
        </circle>
      </g>
    </svg>
  );
}
