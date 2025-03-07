import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  ChevronRight,
  LineChart,
  Shield,
  Users,
} from 'lucide-react';

const Consulting = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const animateContent = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('opacity-100');
        headingRef.current.classList.remove('translate-y-4');
      }

      setTimeout(() => {
        if (servicesRef.current) {
          servicesRef.current.classList.add('opacity-100');
          servicesRef.current.classList.remove('translate-y-8');
        }
      }, 300);

      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('opacity-100');
          ctaRef.current.classList.remove('translate-y-8');
        }
      }, 600);
    };

    setTimeout(animateContent, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        pageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <main>
        <section className="relative pt-32 pb-20 bg-navy-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334')] bg-cover bg-center opacity-10"></div>
          <div className="content-container relative z-10">
            <div
              ref={headingRef}
              className="text-center opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
              <span className="inline-block py-1 px-3 text-xs md:text-sm uppercase tracking-wider bg-navy-800 text-gold-400 rounded-full mb-4">
                AI Consulting Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                High-Impact AI Strategy <br />
                <span className="text-gold-500">For Elite Organizations</span>
              </h1>
              <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
                For CEOs, Investors & Industry Titans who understand that AI
                isn't just an option—it's essential for survival.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="content-container">
            <div
              ref={servicesRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-heading mb-6">
                  Strategic AI Consulting
                  <span className="text-gold-500">.</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Adenola provides exclusive, high-value consulting services
                  focused on leveraging AI to create exponential business growth
                  and competitive advantage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                      <LineChart className="w-6 h-6 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      AI-Driven SWOT Analysis for Executives
                    </h3>
                    <p className="text-gray-600 mb-6">
                      A comprehensive analysis of your organization's AI
                      readiness, competitive landscape, and strategic
                      opportunities using Adenola's proprietary AI assessment
                      methodology.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Identify hidden weaknesses before competitors do
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Discover unforeseen AI implementation opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Map your AI transformation journey
                        </span>
                      </li>
                    </ul>
                    <p className="font-semibold text-navy-900">
                      Starting from $25,000
                    </p>
                  </div>
                </div>

                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                      <Briefcase className="w-6 h-6 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Financial Forecasting & AI-Driven Market Intelligence
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Cutting-edge AI-powered financial analysis and market
                      positioning insights designed specifically for hedge
                      funds, investment firms, and corporate finance teams.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          AI-powered predictive financial modeling
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Competitive investment landscape analysis
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Risk assessment and mitigation strategies
                        </span>
                      </li>
                    </ul>
                    <p className="font-semibold text-navy-900">
                      Starting from $35,000
                    </p>
                  </div>
                </div>

                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Corporate Leadership Training – AI for C-Suite
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Exclusive, customized training programs for executive
                      teams on integrating AI into strategic decision-making
                      processes.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Tailored AI literacy for executive leadership
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          AI governance and ethical implementation frameworks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Strategic AI adoption roadmapping
                        </span>
                      </li>
                    </ul>
                    <p className="font-semibold text-navy-900">
                      Starting from $50,000
                    </p>
                  </div>
                </div>

                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Hedge Fund-Level Business Strategy
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The same strategic AI implementation advisory that Adenola
                      provides to hedge funds, now available for select
                      corporate clients.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          AI-powered market positioning strategy
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          Competitive moat development using AI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-700">
                          AI transformation execution roadmap
                        </span>
                      </li>
                    </ul>
                    <p className="font-semibold text-navy-900">
                      Starting from $75,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={ctaRef}
              className="max-w-3xl mx-auto bg-navy-50 p-10 rounded-lg opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Ready to transform your organization with AI?
              </h3>
              <p className="text-center text-gray-700 mb-8">
                Adenola works with a limited number of high-value clients each
                quarter. Schedule a confidential consultation to discuss your
                organization's needs.
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                >
                  Book a Private Consultation{' '}
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  Minimum engagement: $25K+ per project
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Consulting;
