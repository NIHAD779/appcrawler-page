export default function AppCrawlerIllustration() {
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
        fill="#F8FAFF"
        stroke="#0077b6"
        strokeWidth="3"
      />
      
      {/* Screen */}
      <rect
        x="70"
        y="50"
        width="260"
        height="400"
        rx="10"
        fill="#0A1F44"
      />
      
      {/* Navigation nodes */}
      {/* Home node */}
      <circle cx="200" cy="100" r="20" fill="#0077b6" />
      <text x="200" y="105" textAnchor="middle" fill="#F8FAFF" fontSize="10" fontWeight="bold">
        H
      </text>
      
      {/* Profile node */}
      <circle cx="280" cy="180" r="18" fill="#0096c7" />
      <text x="280" y="185" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold">
        P
      </text>
      
      {/* Settings node */}
      <circle cx="120" cy="180" r="18" fill="#0096c7" />
      <text x="120" y="185" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold">
        S
      </text>
      
      {/* Detail node */}
      <circle cx="200" cy="260" r="18" fill="#00b4d8" />
      <text x="200" y="265" textAnchor="middle" fill="#F8FAFF" fontSize="9" fontWeight="bold">
        D
      </text>
      
      {/* Cart node */}
      <circle cx="280" cy="340" r="16" fill="#48cae4" opacity="0.9" />
      <text x="280" y="345" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold">
        C
      </text>
      
      {/* About node */}
      <circle cx="120" cy="340" r="16" fill="#48cae4" opacity="0.9" />
      <text x="120" y="345" textAnchor="middle" fill="#0A1F44" fontSize="8" fontWeight="bold">
        A
      </text>
      
      {/* Connection lines */}
      {/* Home to Profile */}
      <line
        x1="215"
        y1="110"
        x2="265"
        y2="170"
        stroke="#00b4d8"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Home to Settings */}
      <line
        x1="185"
        y1="110"
        x2="135"
        y2="170"
        stroke="#00b4d8"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Home to Detail */}
      <line
        x1="200"
        y1="120"
        x2="200"
        y2="240"
        stroke="#00b4d8"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      
      {/* Detail to Cart */}
      <line
        x1="215"
        y1="270"
        x2="265"
        y2="330"
        stroke="#48cae4"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      
      {/* Detail to About */}
      <line
        x1="185"
        y1="270"
        x2="135"
        y2="330"
        stroke="#48cae4"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      
      {/* Profile to Cart */}
      <line
        x1="280"
        y1="198"
        x2="280"
        y2="324"
        stroke="#0096c7"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        opacity="0.6"
      />
      
      {/* Decorative dots for visual interest */}
      <circle cx="90" cy="120" r="3" fill="#0096c7" opacity="0.5" />
      <circle cx="310" cy="240" r="3" fill="#48cae4" opacity="0.5" />
      <circle cx="90" cy="300" r="3" fill="#0096c7" opacity="0.5" />
      <circle cx="310" cy="140" r="3" fill="#48cae4" opacity="0.5" />
    </svg>
  );
}
