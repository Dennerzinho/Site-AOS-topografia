import React from 'react';
import { Link2 } from 'lucide-react';
import { RectangularPrism, HexagonalPrism, PyramidPrism } from './GeometricPrisms';

interface ProficoBannerProps {
  bannerRef?: React.RefObject<HTMLDivElement | null>;
}

export const ProficoBanner: React.FC<ProficoBannerProps> = ({ bannerRef }) => {
  return (
    <div
      ref={bannerRef}
      id="profico-academy-banner"
      className="w-full max-w-[1200px] mx-auto bg-black text-white relative select-none box-border flex flex-col justify-between"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="w-full px-8 py-7 flex items-center justify-between border-b border-white/10">
        {/* Brand Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-white">
            Profico<span className="text-white">.</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          <a
            href="#about"
            className="text-white hover:text-white/80 transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            About
          </a>
          <a
            href="#courses"
            className="text-white hover:text-white/80 transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Courses
          </a>
          <a
            href="#process"
            className="text-white hover:text-white/80 transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Process
          </a>
          <a
            href="#faq"
            className="text-white hover:text-white/80 transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            FAQ
          </a>
        </nav>

        {/* Header Apply Button */}
        <div>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-white bg-white text-black text-xs font-semibold hover:bg-white/90 transition-all duration-200 shadow-sm cursor-pointer"
            style={{ color: '#000000', backgroundColor: '#ffffff' }}
          >
            Apply now
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-20 pb-24 px-6 text-center flex flex-col items-center justify-center">
        {/* Subtitle / Category pill */}
        <p className="text-[11px] md:text-xs uppercase font-medium tracking-[0.28em] text-white mb-6">
          DEV &amp; DESIGN INTERNSHIP
        </p>

        {/* Main Banner Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight text-white leading-[0.98] mb-10 max-w-4xl">
          Profico
          <br />
          Academy
        </h1>

        {/* Hero Apply Button */}
        <button
          type="button"
          className="px-8 py-2.5 rounded-full border border-white/60 hover:border-white bg-transparent text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer shadow-none hover:bg-white/5"
        >
          Apply now
        </button>
      </section>

      {/* 3. METRICS / STATS BAR */}
      <section className="w-full border-t border-b border-white/20 px-4 sm:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Stat 1: Location */}
          <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-wider text-white font-normal mb-1">
              LOCATION
            </span>
            <span className="text-sm md:text-base font-semibold text-white">
              Split / Zagreb
            </span>
          </div>

          {/* Stat 2: Duration */}
          <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-wider text-white font-normal mb-1">
              DURATION
            </span>
            <span className="text-sm md:text-base font-semibold text-white">
              8 weeks
            </span>
          </div>

          {/* Stat 3: Mentors */}
          <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-wider text-white font-normal mb-1">
              MENTORS
            </span>
            <span className="text-sm md:text-base font-semibold text-white">
              5
            </span>
          </div>

          {/* Stat 4: Courses */}
          <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-wider text-white font-normal mb-1">
              COURSES
            </span>
            <span className="text-sm md:text-base font-semibold text-white">
              4
            </span>
          </div>
        </div>
      </section>

      {/* 4. SECTION: WHAT'S IN IT FOR YOU? */}
      <section className="pt-28 pb-16 px-6 text-center flex flex-col items-center">
        {/* Plus ornament */}
        <div className="text-white text-base font-light mb-8 opacity-80">+</div>

        {/* Pill with link icon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-xs text-white mb-8 hover:border-white/60 transition-colors">
          <Link2 className="w-3.5 h-3.5 text-white" />
          <span className="font-medium tracking-tight">Learn more about us</span>
        </div>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          What’s in it for you?
        </h2>

        {/* Section Subtitle */}
        <p className="text-sm sm:text-base text-white max-w-lg leading-relaxed font-normal">
          Gain all the skills you need to kick-start your professional path through mentoring by industry professionals.
        </p>
      </section>

      {/* 5. FOUR FEATURE CARDS GRID */}
      <section className="px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 01: Hands-on learning */}
          <div className="bg-black border border-white/20 rounded-2xl p-6 sm:p-7 min-h-[360px] relative flex flex-col justify-between overflow-hidden group hover:border-white/40 transition-colors duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                Hands-on learning
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Each course will take you through the entire process of completing and testing a project.
              </p>
            </div>

            {/* Geometric Glass Prism Element */}
            <div className="mt-8 flex items-end justify-between relative z-0">
              <div className="relative -ml-2 -mb-2">
                <RectangularPrism className="w-20 h-28 sm:w-24 sm:h-32 transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-semibold text-white/80 tracking-wider absolute bottom-0 right-0">
                01
              </span>
            </div>
          </div>

          {/* Card 02: Mentorship by our experts */}
          <div className="bg-black border border-white/20 rounded-2xl p-6 sm:p-7 min-h-[360px] relative flex flex-col justify-between overflow-hidden group hover:border-white/40 transition-colors duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                Mentorship by our experts
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Take advantage of your mentor’s expertise and gain industry-relevant feedback.
              </p>
            </div>

            {/* Bottom Number */}
            <div className="mt-8 flex items-end justify-end">
              <span className="text-xs font-semibold text-white/80 tracking-wider">
                02
              </span>
            </div>
          </div>

          {/* Card 03: Widely applicable skills */}
          <div className="bg-black border border-white/20 rounded-2xl p-6 sm:p-7 min-h-[360px] relative flex flex-col justify-between overflow-hidden group hover:border-white/40 transition-colors duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                Widely applicable skills
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                The Academy is designed to give you a solid foundation and boost your professional growth.
              </p>
            </div>

            {/* Geometric Hexagonal Crystal Prism Element */}
            <div className="mt-8 flex items-end justify-between relative z-0">
              <div className="relative -ml-3 -mb-3">
                <HexagonalPrism className="w-24 h-24 sm:w-28 sm:h-28 transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-semibold text-white/80 tracking-wider absolute bottom-0 right-0">
                03
              </span>
            </div>
          </div>

          {/* Card 04: Street cred */}
          <div className="bg-black border border-white/20 rounded-2xl p-6 sm:p-7 min-h-[360px] relative flex flex-col justify-between overflow-hidden group hover:border-white/40 transition-colors duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                Street cred
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Upon completion you will receive a certificate verifying your new skills!
              </p>
            </div>

            {/* Geometric Pyramid Crystal Element */}
            <div className="mt-8 flex items-end justify-between relative z-0">
              <span className="text-xs font-semibold text-white/80 tracking-wider absolute bottom-0 right-16 sm:right-20 z-10">
                04
              </span>
              <div className="relative -mr-4 -mb-4 ml-auto">
                <PyramidPrism className="w-24 h-28 sm:w-28 sm:h-32 transform group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle bottom padding */}
      <footer className="w-full py-6 text-center border-t border-white/10 text-[11px] text-white/60 tracking-wider">
        PROFICO ACADEMY &copy; {new Date().getFullYear()} — DEV &amp; DESIGN INTERNSHIP
      </footer>
    </div>
  );
};
