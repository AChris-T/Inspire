import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, LineChart, Network, Shield } from 'lucide-react';

const InspireEdge = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featureRowsRef = useRef<HTMLDivElement>(null);

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
                The AI-Powered Intelligence Platform <br />
                <span className="text-gold-500">For Strategic Leaders</span>
              </h1>
              <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
                Your AI Strategy Partner for Competitive Advantage in an
                AI-First World
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="text-white"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,144C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="content-container">
            <div
              ref={contentRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-heading mb-6">
                  AI-Powered Business Intelligence
                  <span className="text-gold-500">.</span>
                </h2>
                <p className="text-lg text-gray-700">
                  InspireEdge AI is the culmination of Adenola's expertise in
                  AI, business strategy, and predictive analytics. It's not just
                  a platform—it's your strategic advantage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <LineChart className="w-12 h-12 mx-auto text-gold-500 mb-4" />
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

                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <Network className="w-12 h-12 mx-auto text-gold-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">
                      Predictive Market Intelligence
                    </h3>
                    <p className="text-gray-600">
                      Identify emerging trends, potential disruptions, and
                      strategic opportunities before your competitors can act on
                      them.
                    </p>
                  </div>
                </div>

                <div className="premium-card hover:shadow-xl transition-all duration-300">
                  <div className="p-8 text-center">
                    <Shield className="w-12 h-12 mx-auto text-gold-500 mb-4" />
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

            <div
              ref={featureRowsRef}
              className="py-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-w-16 aspect-h-9 bg-navy-900">
                      <div className="flex items-center justify-center p-8">
                        <LineChart size={64} className="text-platinum-300" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">
                    AI-Powered Market Analysis
                    <span className="text-gold-500">.</span>
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    InspireEdge AI processes vast amounts of market data to
                    identify patterns and trends that human analysts might miss.
                    Our platform provides:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Competitor strategy analysis and positioning insights
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Industry disruption predictions with 85%+ accuracy
                          rate
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Strategic opportunity identification based on
                          AI-analyzed market gaps
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-w-16 aspect-h-9 bg-navy-900">
                      <div className="flex items-center justify-center p-8">
                        <Shield size={64} className="text-platinum-300" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">
                    Executive-Ready Strategy Insights
                    <span className="text-gold-500">.</span>
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Don't just collect data—transform it into actionable
                    intelligence that drives executive decision-making:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          AI-powered scenario planning and risk assessment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Strategic decision support with confidence scoring
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">
                          Executive-ready reports and boardroom presentation
                          materials
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-900 text-white">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-heading text-white mb-6">
                Ready to Harness the Power of AI?
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-xl text-platinum-300 mb-8">
                Join the exclusive group of forward-thinking organizations
                already leveraging InspireEdge AI.
              </p>
              <Link
                to="/contact"
                className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
              >
                Sign Up for Early Access{' '}
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InspireEdge;
