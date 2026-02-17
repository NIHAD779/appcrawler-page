export default function NavMapIllustration() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md"
    >
      {/* Phone frame */}
      <rect
        x="50"
        y="20"
        width="300"
        height="460"
        rx="30"
        fill="#0A1F44"
        stroke="#1E56A0"
        strokeWidth="3"
      />
      
      {/* Screen */}
      <rect
        x="70"
        y="50"
        width="260"
        height="400"
        rx="10"
        fill="#F8FAFF"
      />
      
      {/* Navigation nodes */}
      {/* Home node */}
      <circle cx="200" cy="100" r="20" fill="#1E56A0" />
      <text x="200" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        H
      </text>
      
      {/* Profile node */}
      <circle cx="280" cy="180" r="18" fill="#5EADF2" />
      <text x="280" y="185" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
        P
      </text>
      
      {/* Settings node */}
      <circle cx="120" cy="180" r="18" fill="#5EADF2" />
      <text x="120" y="185" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
        S
      </text>
      
      {/* Detail node */}
      <circle cx="200" cy="260" r="18" fill="#5EADF2" />
      <text x="200" y="265" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
        D
      </text>
      
      {/* Cart node */}
      <circle cx="280" cy="340" r="16" fill="#5EADF2" opacity="0.8" />
      <text x="280" y="345" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
        C
      </text>
      
      {/* About node */}
      <circle cx="120" cy="340" r="16" fill="#5EADF2" opacity="0.8" />
      <text x="120" y="345" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
        A
      </text>
      
      {/* Connection lines */}
      {/* Home to Profile */}
      <line
        x1="215"
        y1="110"
        x2="265"
        y2="170"
        stroke="#1E56A0"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Home to Settings */}
      <line
        x1="185"
        y1="110"
        x2="135"
        y2="170"
        stroke="#1E56A0"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Home to Detail */}
      <line
        x1="200"
        y1="120"
        x2="200"
        y2="240"
        stroke="#1E56A0"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Detail to Cart */}
      <line
        x1="215"
        y1="270"
        x2="265"
        y2="330"
        stroke="#5EADF2"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      
      {/* Detail to About */}
      <line
        x1="185"
        y1="270"
        x2="135"
        y2="330"
        stroke="#5EADF2"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      
      {/* Profile to Cart */}
      <line
        x1="280"
        y1="198"
        x2="280"
        y2="324"
        stroke="#5EADF2"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        opacity="0.6"
      />
      
      {/* Decorative dots for visual interest */}
      <circle cx="90" cy="120" r="3" fill="#5EADF2" opacity="0.3" />
      <circle cx="310" cy="240" r="3" fill="#5EADF2" opacity="0.3" />
      <circle cx="90" cy="300" r="3" fill="#5EADF2" opacity="0.3" />
      <circle cx="310" cy="140" r="3" fill="#5EADF2" opacity="0.3" />
    </svg>
  );
}
