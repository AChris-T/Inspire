import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple parallax effect for the background
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
      if (overlayRef.current) {
        const scrollPosition = window.scrollY;
        overlayRef.current.style.opacity = (
          0.1 +
          scrollPosition * 0.0005
        ).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate elements on load
    const timer1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100');
        titleRef.current.classList.remove('translate-y-4');
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('opacity-100');
        subtitleRef.current.classList.remove('translate-y-4');
      }
    }, 600);

    const timer3 = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('opacity-100');
        ctaRef.current.classList.remove('translate-y-4');
      }
    }, 900);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen mt-24 flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900 z-0"
      >
        {/* Abstract grid pattern overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-10"
        ></div>

        {/* Dynamic particle effect overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div
            className="absolute top-1/3 -right-20 w-60 h-60 bg-navy-600 rounded-full filter blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute -bottom-10 left-1/4 w-52 h-52 bg-navy-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>

      <div className="content-container relative z-10 pt-20 pb-16 md:py-0">
        <div className="flex flex-col items-center text-center">
          <div
            ref={titleRef}
            className="mb-6 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
          >
            <span className="inline-block py-1 px-3 text-xs md:text-sm uppercase tracking-wider bg-navy-800 text-platinum-100 rounded-full mb-4">
              AI Business Strategist & Global Leadership Architect
            </span>
            <h1 className="hero-text text-platinum-50 leading-none">
              Adenola Adegbesan
            </h1>
            <p className="text-gold-500 text-2xl md:text-3xl mt-2 font-medium">
              Empowering Leaders to Navigate AI Transformation with Strategic
              Clarity
            </p>
          </div>

          <div
            ref={subtitleRef}
            className="max-w-3xl mb-10 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300"
          >
            <p className="text-lg md:text-xl text-platinum-300 leading-relaxed">
              AI is no longer a future concept—it's the present reality. The
              challenge isn't adopting AI but strategically integrating it to
              drive efficiency, decision-making, and competitive advantage.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col md:flex-row items-center gap-4 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-500"
          >
            <Link
              to="/speaking"
              className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950 w-full md:w-auto"
            >
              Schedule AI Strategy Consultation{' '}
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/consulting"
              className="premium-button-outline border-platinum-300 text-platinum-100 hover:bg-navy-800 hover:border-navy-800 w-full md:w-auto"
            >
              Book a Private AI Strategy Session
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Animated scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center text-platinum-300 opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
