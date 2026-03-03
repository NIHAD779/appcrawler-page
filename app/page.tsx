"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Do I need an API key?",
      answer: "Yes. The plugin asks for an OpenAI API key on the welcome screen; it's used for AI-powered analysis."
    },
    {
      question: "Do I need to set up anything?",
      answer: (
        <>
          You need JCEF (JetBrains Runtime with Chromium Embedded Framework) to render the interactive navigation graph. You can also follow{" "}
          <a href="https://youtu.be/Q2p0dKzz_o4" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: "#48cae4" }}>this tutorial</a> for setup.
        </>
      )
    },
    {
      question: "How do I run an analysis?",
      answer: "Open the QAPilot tool window (right sidebar or View → Tool Windows → QAPilot), enter your OpenAI API key and click Analyze Project."
    },
    {
      question: "How long does analysis take?",
      answer: "Analysis usually takes about 2–4 minutes, with progress shown in the UI."
    },
    {
      question: "What Android Studio versions are supported?",
      answer: "AppCrawler supports Android Studio 2024.2 and newer."
    },
    {
      question: "Is my code uploaded anywhere?",
      answer: "Your code is analyzed using OpenAI's API to provide intelligent insights. We process your code securely and do not store it permanently. All analysis happens in real-time and results are delivered directly to your IDE."
    },
    {
      question: "How much does AppCrawler cost?",
      answer: "You can pick up AppCrawler for a one-time payment of $10 right now as part of our launch deal."
    },
    {
      question: "What output formats are available?",
      answer: "You can view your app context in two formats: tabular data for structured analysis and interactive graphs for visual exploration."
    },
    {
      question: "Do you offer refunds?",
      answer: "All purchases are final and non-refundable. However, if you run into any trouble with installation, configuration, or running your analysis, we'll provide hands-on support until everything is working smoothly. Your success with the product is our priority."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1F44' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(10, 31, 68, 0.8)', borderColor: 'rgba(0, 119, 182, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold no-underline" style={{ color: '#F8FAFF' }}>
            App<span style={{ color: '#00b4d8' }}>Crawler</span>
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#features" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              Features
            </a>
            <a href="#pricing" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              Pricing
            </a>
            <a href="#faq" className="hover:opacity-70 transition-colors" style={{ color: '#F8FAFF' }}>
              FAQ
            </a>
            <a
              href="https://qapilotlabs.gumroad.com/l/aohgky"
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: '#F8FAFF' }}
            />
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: '#F8FAFF' }}
            />
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: '#F8FAFF' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}
          style={{ backgroundColor: 'rgba(10, 31, 68, 0.95)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="hover:opacity-70 transition-colors py-2 text-sm font-medium"
              style={{ color: '#F8FAFF' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="hover:opacity-70 transition-colors py-2 text-sm font-medium"
              style={{ color: '#F8FAFF' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="hover:opacity-70 transition-colors py-2 text-sm font-medium"
              style={{ color: '#F8FAFF' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://qapilotlabs.gumroad.com/l/aohgky"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-semibold transition-all duration-300 text-center text-sm"
              style={{ 
                backgroundColor: '#0077b6',
                color: '#F8FAFF'
              }}
            >
              Get AppCrawler
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Text + CTA */}
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#F8FAFF' }}>
                Understand Your Entire App's Context
                <span className="block mt-2" style={{ color: '#48cae4' }}>In Minutes</span>
              </h1>
              <p className="text-base md:text-lg max-w-lg mx-auto md:mx-0" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                Analyze your complete Android codebase instantly. Get comprehensive app context in tabular and graph formats right inside Android Studio.
              </p>
              
              
              {/* CTA with direct link */}
              <div>
                <a
                  href="https://qapilotlabs.gumroad.com/l/aohgky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-flex items-center gap-3 px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: '#0077b6',
                    color: '#F8FAFF',
                    boxShadow: '0 0 20px rgba(0, 119, 182, 0.5), 0 0 40px rgba(0, 119, 182, 0.2)'
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

        {/* Scroll Hint */}
        <a
          href="#testimonials"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Scroll to next section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#48cae4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: '#F8FAFF' }}>
            Trusted by Android Developers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <TestimonialCard
              quote="AppCrawler completely changed how I explore unfamiliar Android codebases. As a developer, being able to instantly see the full project structure and flow saves me hours every time I jump into a new repo."
              author="Aakash B"
              role="Software Developer"
              image="/aakash.JPG"
            />
            
            <TestimonialCard
              quote="From a product perspective, AppCrawler gives our team a shared understanding of the app without relying on engineering to explain every screen. Onboarding, feature planning, and sprint scoping have all gotten faster."
              author="Kammara Charan Tej"
              role="Product Manager"
              image="/charan.png"
            />
            
            <TestimonialCard
              quote="AppCrawler has become an essential part of our QA process. I can trace user flows, spot untested paths, and understand exactly how screens connect — all without waiting for a dev walkthrough."
              author="Sai Sudheer Reddy"
              role="QA Lead"
              image="/sudheer.png"
            />
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12" style={{ color: '#F8FAFF' }}>
            See AppCrawler in Action
          </h2>
          
          <div className="relative rounded-2xl overflow-hidden border-2" style={{ 
            backgroundColor: '#0D2850', 
            borderColor: 'rgba(0, 119, 182, 0.3)',
            paddingBottom: '56.25%'
          }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/eiKiVzXtzQ8?si=8xOUuN5BkA45Eze7"
              title="AppCrawler Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Problem / Empathy Section */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: '#F8FAFF' }}>
            Tired of the Struggle?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Pain Point 1 */}
            <ProblemCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="#48cae4" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M4 24L24 34L44 24" stroke="#48cae4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 34L24 44L44 34" stroke="#0096c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Manually tracing navigation flows across 200+ files?"
              description="Hours wasted jumping between Activities, Fragments, and navigation graphs trying to understand how your app actually flows."
            />

            {/* Pain Point 2 */}
            <ProblemCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8H36V40H12V8Z" stroke="#48cae4" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M18 16H30M18 24H30M18 32H26" stroke="#0096c7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 12L16 4M8 20L16 12M8 28L16 20" stroke="#ff5f56" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title="Outdated architecture docs that nobody trusts?"
              description="Documentation becomes stale the moment it's written. Your team relies on tribal knowledge instead of reliable sources."
            />

            {/* Pain Point 3 */}
            <ProblemCard
              icon={
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="14" r="6" stroke="#48cae4" strokeWidth="2"/>
                  <path d="M12 38V34C12 30.686 14.686 28 18 28H30C33.314 28 36 30.686 36 34V38" stroke="#48cae4" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M32 8L40 16M40 8L32 16" stroke="#ff5f56" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title="Onboarding new devs takes weeks, not days?"
              description="New team members struggle to grasp the big picture. They make changes blindly, breaking navigation flows they didn't know existed."
            />
          </div>
        </div>
      </section>

      {/* Features Section - Narrative Layout */}
      <section id="features" className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-24" style={{ color: '#F8FAFF' }}>
            Everything you need to understand your app
          </h2>
          
          {/* Feature 1: Complete Codebase Analysis - Text Left, Illustration Right */}
          <FeatureSection
            title="Scan your entire codebase in minutes"
            description="AppCrawler intelligently analyzes your complete project, extracting every screen and navigation flow without the need for manual documentation."
            illustration={<CodebaseAnalysisIllustration />}
            layoutRight={true}
          />

          {/* Feature 2: Multiple Output Formats - Text Right, Illustration Left */}
          <FeatureSection
            title="View your app context in any format"
            description="Switch between tabular data for quick analysis or interactive graphs for visual exploration."
            illustration={<OutputFormatsIllustration />}
            layoutRight={false}
          />

          {/* Feature 3: Native Android Studio Integration - Text Left, Illustration Right */}
          <FeatureSection
            title="Works seamlessly in your IDE"
            description="A native Android Studio plugin that delivers comprehensive app context directly in your workspace. Start analyzing with a single click."
            illustration={<IDEIntegrationIllustration />}
            layoutRight={true}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12" style={{ color: '#F8FAFF' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-center mb-12 md:mb-16 max-w-2xl mx-auto" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
            One-time purchase. Lifetime access. No subscriptions or recurring fees.
          </p>

          <div className="flex justify-center max-w-md mx-auto">
            <PricingCard
              name="AppCrawler"
              price="$10"
              originalPrice="$20"
              features={[
                "Unlimited projects",
                "All output formats",
                "Advanced analysis",
                "Priority support",
                "Export capabilities",
                "Lifetime updates"
              ]}
              ctaText="Get AppCrawler Now"
              ctaLink="https://qapilotlabs.gumroad.com/l/aohgky"
              highlighted={true}
              badge="Launch Offer"
            />
          </div>
        </div>
      </section>

      {/* Lead Capture / Email Signup Section */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2850' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F8FAFF' }}>
            Not ready yet? Stay in the loop.
          </h2>
          <p className="text-base md:text-lg mb-8 md:mb-10" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
            Get notified about updates, tips, and early-bird offers.
          </p>

          <EmailSignupForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16" style={{ color: '#F8FAFF' }}>
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
                  <span className="font-semibold text-base md:text-lg pr-4" style={{ color: '#F8FAFF' }}>
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
                  <div className="px-6 pb-5 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#0A1F44' }}>
                App<span style={{ color: '#0077b6' }}>Crawler</span>
              </div>
              <p className="text-sm max-w-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>
                Get complete app context for your Android projects in minutes.
              </p>
            </div>

            {/* Also Available As */}
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: '#0A1F44' }}>
                Also Available As
              </h4>
              <div className="space-y-2">
                <div>
                  <div className="font-medium text-sm" style={{ color: '#0077b6' }}>MCP Server</div>
                  <p className="text-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>Coming soon</p>
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: '#0077b6' }}>API Access</div>
                  <p className="text-xs" style={{ color: 'rgba(10, 31, 68, 0.6)' }}>Coming soon</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: '#0A1F44' }}>
                Support
              </h4>
              <a
                href="mailto:nihad.u@qapilot.com"
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: '#0077b6' }}
              >
                nihad.u@qapilot.com
              </a>
            </div>
          </div>

          <div className="mt-5 pt-4 text-center text-xs" style={{ borderTop: '1px solid rgba(10, 31, 68, 0.1)', color: 'rgba(10, 31, 68, 0.5)' }}>
          <p className="text-xs mt-2" style={{ color: 'rgba(10, 31, 68, 0.5)' }}>
                Built by <span className="font-semibold" style={{ color: '#0077b6' }}>QApilot</span>
              </p>
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
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${layoutRight ? '' : 'md:grid-flow-dense'}`}>
      {/* Text Content */}
      <div
        ref={textRef}
        className={`space-y-4 md:space-y-6 ${layoutRight ? 'md:order-1' : 'md:order-2 md:col-start-2'} ${
          textInView ? (layoutRight ? 'animate-on-scroll-left visible' : 'animate-on-scroll-right visible') : 
          (layoutRight ? 'animate-on-scroll-left' : 'animate-on-scroll-right')
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: '#F8FAFF' }}>
          {title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(248, 250, 255, 0.7)' }}>
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

// Testimonial Card Component
function TestimonialCard({ quote, author, role, image }: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
        inView ? 'animate-on-scroll visible' : 'animate-on-scroll'
      }`}
      style={{ 
        backgroundColor: '#0D2850', 
        borderColor: 'rgba(0, 119, 182, 0.3)'
      }}
    >
      <p className="text-base md:text-lg italic mb-6 leading-relaxed flex-1" style={{ color: 'rgba(248, 250, 255, 0.9)' }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={author}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <div className="font-semibold" style={{ color: '#F8FAFF' }}>
            {author}
          </div>
          <div className="text-sm" style={{ color: 'rgba(248, 250, 255, 0.6)' }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

// Problem Card Component
function ProblemCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl border transition-all duration-300 ${
        inView ? 'animate-on-scroll visible' : 'animate-on-scroll'
      }`}
      style={{ 
        backgroundColor: '#0A1F44', 
        borderColor: 'rgba(0, 119, 182, 0.3)'
      }}
    >
      <div className="mb-4 flex justify-center md:justify-start">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#F8FAFF' }}>
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(248, 250, 255, 0.6)' }}>
        {description}
      </p>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ name, price, originalPrice, features, ctaText, ctaLink, highlighted, badge }: {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted: boolean;
  badge?: string;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
        highlighted ? 'md:scale-105' : ''
      } ${inView ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
      style={{ 
        backgroundColor: '#0D2850', 
        borderColor: highlighted ? '#00b4d8' : 'rgba(0, 119, 182, 0.3)'
      }}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: '#00b4d8', color: '#0A1F44' }}>
          {badge}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#F8FAFF' }}>
          {name}
        </h3>
        <div className="flex items-baseline justify-center gap-3 mb-2">
          {originalPrice && (
            <span className="text-2xl md:text-3xl font-semibold line-through" style={{ color: 'rgba(248, 250, 255, 0.4)' }}>
              {originalPrice}
            </span>
          )}
          <span className="text-4xl md:text-5xl font-bold" style={{ color: '#48cae4' }}>
            {price}
          </span>
        </div>
        {originalPrice && (
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold" 
            style={{ backgroundColor: 'rgba(0, 180, 216, 0.2)', color: '#48cae4' }}>
            Save 50%
          </div>
        )}
        <p className="text-sm mt-2" style={{ color: 'rgba(248, 250, 255, 0.6)' }}>
          One-time payment
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="#00b4d8"/>
            </svg>
            <span className="text-sm md:text-base" style={{ color: 'rgba(248, 250, 255, 0.8)' }}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 transform hover:scale-105"
        style={{ 
          backgroundColor: highlighted ? '#0077b6' : 'rgba(0, 119, 182, 0.2)',
          color: '#F8FAFF',
          border: highlighted ? 'none' : '1px solid rgba(0, 119, 182, 0.5)'
        }}
      >
        {ctaText}
      </a>
    </div>
  );
}

// Email Signup Form Component
function EmailSignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'conflict'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else if (response.status === 409) {
        setStatus('conflict');
        setErrorMessage(data.error || 'This email is already subscribed');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="flex-1 px-5 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
          style={{ 
            backgroundColor: '#0A1F44',
            color: '#F8FAFF',
            border: '1px solid rgba(0, 119, 182, 0.3)'
          }}
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ 
            backgroundColor: '#0077b6',
            color: '#F8FAFF'
          }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>

      {status === 'success' && (
        <p className="mt-4 text-sm" style={{ color: '#27c93f' }}>
          Thanks for signing up! Stay tuned for updates.
        </p>
      )}
      {status === 'conflict' && (
        <p className="mt-4 text-sm" style={{ color: '#ffa500' }}>
          {errorMessage}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-sm" style={{ color: '#ff5f56' }}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
