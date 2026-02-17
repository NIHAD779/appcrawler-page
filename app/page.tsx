"use client";

import { useState, useEffect, useRef } from "react";
import NavMapIllustration from "./components/NavMapIllustration";

export default function Home() {
  const [ctaDropdownOpen, setCtaDropdownOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCtaDropdownOpen(false);
      }
    }
    
    if (ctaDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ctaDropdownOpen]);

  const faqs = [
    {
      question: "What Android Studio versions are supported?",
      answer: "NavMap supports Android Studio Arctic Fox (2020.3.1) and later versions, including all IntelliJ IDEA versions from 2020.3 onwards."
    },
    {
      question: "Is my code uploaded anywhere?",
      answer: "No, absolutely not. NavMap runs entirely locally within your IDE. All analysis happens on your machine, and no code or data is ever transmitted to external servers."
    },
    {
      question: "Is NavMap free?",
      answer: "NavMap offers a free trial with full features. After the trial, you can purchase a license for continued use. Check our pricing on Gumroad for current offers."
    },
    {
      question: "What types of navigation can NavMap detect?",
      answer: "NavMap detects Activity transitions, Fragment transactions, Navigation Component graphs, Jetpack Compose navigation, and deep links throughout your Android application."
    },
    {
      question: "Can I export the navigation map?",
      answer: "Yes! You can export your navigation map as PNG, SVG, or an interactive HTML file that you can share with your team or include in documentation."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFF' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: 'rgba(94, 173, 242, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: '#0A1F44' }}>
            Nav<span style={{ color: '#1E56A0' }}>Map</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:opacity-70 transition-colors" style={{ color: '#0A1F44' }}>
              Features
            </a>
            <a href="#faq" className="hover:opacity-70 transition-colors" style={{ color: '#0A1F44' }}>
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text + CTA */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#0A1F44' }}>
                Visualize Your App's Navigation
                <span className="block mt-2" style={{ color: '#1E56A0' }}>In Seconds</span>
              </h1>
              <p className="text-lg max-w-lg" style={{ color: 'rgba(10, 31, 68, 0.7)' }}>
                Automatically analyze your Android codebase and generate a beautiful, interactive navigation map right inside Android Studio.
              </p>
              
              {/* CTA with dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setCtaDropdownOpen(!ctaDropdownOpen)}
                  className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: '#1E56A0',
                    boxShadow: ctaDropdownOpen ? '0 10px 25px rgba(30, 86, 160, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16447a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E56A0'}
                >
                  Map Your App in One Click
                </button>
                
                {ctaDropdownOpen && (
                  <div className="absolute top-full mt-4 left-0 bg-white rounded-2xl p-6 w-80 shadow-2xl border animate-in fade-in slide-in-from-top-2 duration-200" style={{ borderColor: 'rgba(94, 173, 242, 0.2)' }}>
                    <p className="text-sm mb-4 font-medium" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>Download NavMap:</p>
                    <div className="space-y-3">
                      <a
                        href="#"
                        className="flex items-center gap-4 p-4 rounded-xl border transition-all group"
                        style={{ borderColor: 'rgba(94, 173, 242, 0.3)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#1E56A0';
                          e.currentTarget.style.backgroundColor = 'rgba(30, 86, 160, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(94, 173, 242, 0.3)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(30, 86, 160, 0.1)' }}>
                          <svg className="w-6 h-6" style={{ color: '#1E56A0' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold" style={{ color: '#0A1F44' }}>JetBrains Marketplace</div>
                          <div className="text-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>Official plugin repository</div>
                        </div>
                      </a>
                      
                      <a
                        href="#"
                        className="flex items-center gap-4 p-4 rounded-xl border transition-all group"
                        style={{ borderColor: 'rgba(94, 173, 242, 0.3)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#1E56A0';
                          e.currentTarget.style.backgroundColor = 'rgba(30, 86, 160, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(94, 173, 242, 0.3)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(94, 173, 242, 0.1)' }}>
                          <svg className="w-6 h-6" style={{ color: '#5EADF2' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 3C19.5 3 21 5 21 7.5C21 9.5 20 11 18.5 12C20 13 21 14.5 21 16.5C21 19 19.5 21 16.5 21H7.5C4.5 21 3 19 3 16.5C3 14.5 4 13 5.5 12C4 11 3 9.5 3 7.5C3 5 4.5 3 7.5 3H16.5M8 5C6.5 5 5 6 5 7.5C5 9 6.5 10 8 10H16C17.5 10 19 9 19 7.5C19 6 17.5 5 16 5H8M8 14C6.5 14 5 15 5 16.5C5 18 6.5 19 8 19H16C17.5 19 19 18 19 16.5C19 15 17.5 14 16 14H8Z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold" style={{ color: '#0A1F44' }}>Gumroad</div>
                          <div className="text-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>Direct download + license</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right: Illustration */}
            <div className="flex justify-center md:justify-end">
              <NavMapIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0A1F44' }}>
            Powerful Features, Simple Interface
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F8FAFF', borderColor: 'rgba(94, 173, 242, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(30, 86, 160, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#1E56A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A1F44' }}>One-Click Analysis</h3>
              <p style={{ color: 'rgba(10, 31, 68, 0.7)' }}>
                Scan your entire Android project instantly. No configuration required, just click and visualize.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F8FAFF', borderColor: 'rgba(94, 173, 242, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(94, 173, 242, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#5EADF2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A1F44' }}>Visual Nav Map</h3>
              <p style={{ color: 'rgba(10, 31, 68, 0.7)' }}>
                Generate beautiful, interactive navigation graphs that make understanding your app structure effortless.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#F8FAFF', borderColor: 'rgba(94, 173, 242, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(30, 86, 160, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#1E56A0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0A1F44' }}>Android Studio Native</h3>
              <p style={{ color: 'rgba(10, 31, 68, 0.7)' }}>
                Runs directly inside your IDE. Seamless integration with your existing development workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0A1F44' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border overflow-hidden transition-colors"
                style={{ borderColor: activeFaq === index ? 'rgba(30, 86, 160, 0.4)' : 'rgba(94, 173, 242, 0.2)' }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg pr-4" style={{ color: '#0A1F44' }}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                    style={{ color: '#1E56A0' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: activeFaq === index ? '200px' : '0',
                    opacity: activeFaq === index ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-5 leading-relaxed" style={{ color: 'rgba(10, 31, 68, 0.7)' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-6" style={{ backgroundColor: '#0A1F44' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">
              Nav<span style={{ color: '#5EADF2' }}>Map</span>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#5EADF2' }}>
                GitHub
              </a>
              <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#5EADF2' }}>
                Twitter
              </a>
              <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#5EADF2' }}>
                Documentation
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} NavMap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
