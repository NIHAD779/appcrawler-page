"use client";

import { useState } from "react";
import AppCrawlerIllustration from "./components/AppCrawlerIllustration";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Android Studio versions are supported?",
      answer: "AppCrawler supports Android Studio Arctic Fox (2020.3.1) and later versions, including all IntelliJ IDEA versions from 2020.3 onwards."
    },
    {
      question: "What powers AppCrawler's analysis?",
      answer: "AppCrawler is powered by OpenAI models under the hood, enabling intelligent analysis of your Android codebase to extract comprehensive app context including navigation flows, architecture patterns, and component relationships."
    },
    {
      question: "Is my code uploaded anywhere?",
      answer: "Your code is analyzed using OpenAI's API to provide intelligent insights. We process your code securely and do not store it permanently. All analysis happens in real-time and results are delivered directly to your IDE."
    },
    {
      question: "Is AppCrawler free?",
      answer: "AppCrawler offers a free trial with full features. After the trial, you can purchase a license for continued use. Check our pricing on Gumroad for current offers."
    },
    {
      question: "What types of app context can AppCrawler analyze?",
      answer: "AppCrawler analyzes your complete Android app including Activity transitions, Fragment navigation, Jetpack Compose flows, screen hierarchies, deep links, data models, and overall architecture patterns."
    },
    {
      question: "What output formats are available?",
      answer: "You can view and export your app context in three formats: tabular data for structured analysis, interactive graphs for visual exploration, and mermaid diagrams for documentation and sharing."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1F44' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(10, 31, 68, 0.8)', borderColor: 'rgba(0, 119, 182, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: '#F8FAFF' }}>
            App<span style={{ color: '#00b4d8' }}>Crawler</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              Features
            </a>
            <a href="#faq" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
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
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F8FAFF' }}>
                Understand Your Entire App's Context
                <span className="block mt-2" style={{ color: '#48cae4' }}>In Minutes</span>
              </h1>
              <p className="text-lg max-w-lg" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                Analyze your complete Android codebase instantly. Get comprehensive app context in tabular, graph, and mermaid diagram formats—right inside Android Studio.
              </p>
              
              {/* CTA with direct link */}
              <div>
                <a
                  href="https://gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: '#0077b6',
                    color: '#F8FAFF'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0096c7'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0077b6'}
                >
                  Get AppCrawler Now
                </a>
              </div>
            </div>
            
            {/* Right: Illustration */}
            <div className="flex justify-center md:justify-end">
              <AppCrawlerIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#F8FAFF' }}>
            Powerful Features, Simple Interface
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30" style={{ backgroundColor: '#0A1F44', borderColor: 'rgba(0, 119, 182, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 119, 182, 0.15)' }}>
                <svg className="w-8 h-8" style={{ color: '#00b4d8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F8FAFF' }}>Complete Codebase Analysis</h3>
              <p style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                Scan your entire Android project in minutes. Get comprehensive app context including screens, navigation flows, and architecture patterns.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30" style={{ backgroundColor: '#0A1F44', borderColor: 'rgba(0, 119, 182, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 150, 199, 0.15)' }}>
                <svg className="w-8 h-8" style={{ color: '#48cae4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F8FAFF' }}>Multiple Output Formats</h3>
              <p style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                View your app context in tabular data, interactive graphs, or mermaid diagrams. Export and share with your team.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30" style={{ backgroundColor: '#0A1F44', borderColor: 'rgba(0, 119, 182, 0.2)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 180, 216, 0.15)' }}>
                <svg className="w-8 h-8" style={{ color: '#00b4d8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F8FAFF' }}>Android Studio Native</h3>
              <p style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                Seamlessly integrated plugin that analyzes your complete app context without leaving your IDE. No external tools needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#F8FAFF' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{ backgroundColor: '#0D2850', borderColor: activeFaq === index ? 'rgba(0, 180, 216, 0.5)' : 'rgba(0, 119, 182, 0.2)' }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg pr-4" style={{ color: '#F8FAFF' }}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 shrink-0 transition-transform duration-200 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                    style={{ color: '#48cae4' }}
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
                  <div className="px-6 pb-5 leading-relaxed" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <div className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>
                App<span style={{ color: '#0077b6' }}>Crawler</span>
              </div>
              <p className="text-sm max-w-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>
                Get complete app context for your Android projects in minutes.
              </p>
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0A1F44' }}>
                Also Available As
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-sm" style={{ color: '#0077b6' }}>MCP Server</div>
                  <p className="text-xs mt-1" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>
                    Access AppCrawler as a Model Context Protocol server
                  </p>
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: '#0077b6' }}>API Access</div>
                  <p className="text-xs mt-1" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>
                    Integrate app-context analysis via REST API
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0A1F44' }}>
                Links
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#0077b6' }}>
                  GitHub
                </a>
                <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#0077b6' }}>
                  Twitter
                </a>
                <a href="#" className="hover:opacity-70 transition-colors" style={{ color: '#0077b6' }}>
                  Documentation
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(10, 31, 68, 0.1)', color: 'rgba(10, 31, 68, 0.6)' }}>
            © {new Date().getFullYear()} AppCrawler. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
