"use client";

import { useState, useEffect, useRef } from "react";
import AppCrawlerIllustration from "./components/AppCrawlerIllustration";
import { CodebaseAnalysisIllustration, OutputFormatsIllustration, IDEIntegrationIllustration } from "./components/FeatureIllustrations";

// Custom hook for scroll-reveal animations
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
}

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
          <div className="flex gap-8 items-center text-sm font-medium">
            <a href="#features" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              Features
            </a>
            <a href="#faq" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              FAQ
            </a>
            <a
              href="https://gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: '#0077b6',
                color: '#F8FAFF'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0096c7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0077b6'}
            >
              Get AppCrawler
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

      {/* Features Section - Narrative Layout */}
      <section id="features" className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-24" style={{ color: '#F8FAFF' }}>
            Everything you need to understand your app
          </h2>
          
          {/* Feature 1: Complete Codebase Analysis - Text Left, Illustration Right */}
          <FeatureSection
            title="Scan your entire codebase in minutes"
            description="AppCrawler intelligently analyzes your complete Android project, extracting every screen, navigation flow, and architecture pattern. No manual documentation needed."
            illustration={<CodebaseAnalysisIllustration />}
            layoutRight={true}
          />

          {/* Feature 2: Multiple Output Formats - Text Right, Illustration Left */}
          <FeatureSection
            title="View your app context in any format"
            description="Switch between tabular data for quick analysis, interactive graphs for visual exploration, or mermaid diagrams for documentation and team collaboration."
            illustration={<OutputFormatsIllustration />}
            layoutRight={false}
          />

          {/* Feature 3: Native Android Studio Integration - Text Left, Illustration Right */}
          <FeatureSection
            title="Works seamlessly in your IDE"
            description="A native Android Studio plugin that delivers comprehensive app context directly in your workspace. Start analyzing with a single click—no context switching required."
            illustration={<IDEIntegrationIllustration />}
            layoutRight={true}
          />
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

// Feature Section Component with scroll-reveal
function FeatureSection({ title, description, illustration, layoutRight }: {
  title: string;
  description: string;
  illustration: React.ReactNode;
  layoutRight: boolean;
}) {
  const [textRef, textInView] = useInView();
  const [illustrationRef, illustrationInView] = useInView();

  return (
    <div className={`grid md:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${layoutRight ? '' : 'md:grid-flow-dense'}`}>
      {/* Text Content */}
      <div
        ref={textRef}
        className={`space-y-6 ${layoutRight ? 'md:order-1' : 'md:order-2 md:col-start-2'} ${
          textInView ? (layoutRight ? 'animate-on-scroll-left visible' : 'animate-on-scroll-right visible') : 
          (layoutRight ? 'animate-on-scroll-left' : 'animate-on-scroll-right')
        }`}
      >
        <h3 className="text-3xl font-bold leading-tight" style={{ color: '#F8FAFF' }}>
          {title}
        </h3>
        <p className="text-lg leading-relaxed" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
          {description}
        </p>
      </div>

      {/* Illustration */}
      <div
        ref={illustrationRef}
        className={`flex ${layoutRight ? 'md:order-2 justify-center md:justify-end' : 'md:order-1 md:col-start-1 justify-center md:justify-start'} ${
          illustrationInView ? (layoutRight ? 'animate-on-scroll-right visible' : 'animate-on-scroll-left visible') : 
          (layoutRight ? 'animate-on-scroll-right' : 'animate-on-scroll-left')
        }`}
      >
        {illustration}
      </div>
    </div>
  );
}
