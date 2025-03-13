import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ChevronRight,
  LineChart,
  Network,
  Shield,
  Target,
  Zap,
  ArrowRight,
} from 'lucide-react';

const InspireEdge = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featureRowsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const animateContent = () => {
      if (headingRef.current) {
        headingRef.current.classList.add('opacity-100');
        headingRef.current.classList.remove('translate-y-4');
      }

      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.classList.add('opacity-100');
          contentRef.current.classList.remove('translate-y-8');
        }
      }, 300);

      setTimeout(() => {
        if (featureRowsRef.current) {
          featureRowsRef.current.classList.add('opacity-100');
          featureRowsRef.current.classList.remove('translate-y-8');
        }
      }, 600);

      setTimeout(() => {
        if (statsRef.current) {
          statsRef.current.classList.add('opacity-100');
          statsRef.current.classList.remove('translate-y-8');
        }
      }, 900);
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-navy-950">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="content-container relative z-10">
            <div
              ref={headingRef}
              className="text-center opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
              <span className="inline-block py-1 px-3 text-xs md:text-sm uppercase tracking-wider bg-navy-800 text-gold-400 rounded-full mb-4">
                InspireEdge AI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Business with <br />
                <span className="text-gold-500">AI-Powered Intelligence</span>
              </h1>
              <p className="text-xl text-platinum-300 max-w-3xl mx-auto mb-8">
                Harness the power of advanced AI to drive strategic decisions and maintain
                competitive advantage in an AI-first world
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/contact"
                  className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="premium-button bg-transparent border-2 border-platinum-300 text-platinum-300 hover:bg-platinum-300/10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-navy-900">
          <div className="content-container">
            <div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">85%+</div>
                <p className="text-platinum-300">Prediction Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">500+</div>
                <p className="text-platinum-300">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">24/7</div>
                <p className="text-platinum-300">Real-time Analysis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">3x</div>
                <p className="text-platinum-300">ROI Improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="content-container">
            <div
              ref={contentRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="badge mb-4">Core Features</span>
                <h2 className="section-heading mb-6">
                  AI-Powered Business Intelligence
                  <span className="text-gold-500">.</span>
                </h2>
                <p className="text-lg text-gray-700">
                  InspireEdge AI combines cutting-edge artificial intelligence with deep business
                  expertise to deliver actionable insights that drive growth and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="premium-card group hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-100 transition-colors">
                      <LineChart className="w-8 h-8 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      AI-Driven SWOT Analysis
                    </h3>
                    <p className="text-gray-600">
                      Our proprietary AI algorithms analyze your business data,
                      market conditions, and competitive landscape to provide
                      actionable strategic insights.
                    </p>
                  </div>
                </div>

                <div className="premium-card group hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-100 transition-colors">
                      <Network className="w-8 h-8 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Predictive Market Intelligence
                    </h3>
                    <p className="text-gray-600">
                      Stay ahead of market trends with AI-powered predictions that help
                      you identify opportunities before your competitors.
                    </p>
                  </div>
                </div>

                <div className="premium-card group hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-100 transition-colors">
                      <Shield className="w-8 h-8 text-navy-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Strategic AI-Powered Insights
                    </h3>
                    <p className="text-gray-600">
                      Transform complex data into executive-ready strategic
                      recommendations that drive measurable business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Features */}
            <div
              ref={featureRowsRef}
              className="space-y-20 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-navy-900 to-navy-800">
                      <div className="flex items-center justify-center p-8">
                        <Target size={80} className="text-gold-500" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="badge mb-4">Market Analysis</span>
                  <h3 className="text-2xl font-semibold mb-4">
                    AI-Powered Market Intelligence
                    <span className="text-gold-500">.</span>
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Our advanced AI processes vast amounts of market data to identify patterns
                    and trends that human analysts might miss, providing you with:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Real-time competitor analysis and strategic positioning insights
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Industry disruption predictions with proven 85%+ accuracy
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          AI-analyzed market gaps and strategic opportunity identification
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-navy-900 to-navy-800">
                      <div className="flex items-center justify-center p-8">
                        <Zap size={80} className="text-gold-500" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="badge mb-4">Strategic Planning</span>
                  <h3 className="text-2xl font-semibold mb-4">
                    Executive-Ready Strategy Insights
                    <span className="text-gold-500">.</span>
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Transform data into actionable intelligence that drives confident
                    executive decision-making with:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Advanced AI-powered scenario planning and risk assessment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Data-driven decision support with confidence scoring
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Automated executive reports and presentation materials
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="badge bg-navy-800 text-gold-400 mb-4">Get Started Today</span>
              <h2 className="section-heading text-white mb-6">
                Ready to Transform Your Business?
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-xl text-platinum-300 mb-8">
                Join forward-thinking organizations already leveraging InspireEdge AI
                to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                >
                  Request Early Access <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="premium-button bg-transparent border-2 border-platinum-300 text-platinum-300 hover:bg-platinum-300/10"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InspireEdge;
