import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Clock, Users } from 'lucide-react';
import YouTubeVideo from '../components/YoutubeVideo';

const Speaking = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const contentTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.classList.add('opacity-100');
        videoRef.current.classList.remove('translate-y-4');
      }
      if (contentRef.current) {
        contentRef.current.classList.add('opacity-100');
        contentRef.current.classList.remove('translate-y-8');
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        pageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <main>
        <section className="relative pt-32 pb-20 bg-navy-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10"></div>
          <div className="content-container relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block py-1 px-3 text-xs md:text-sm uppercase tracking-wider bg-navy-800 text-gold-400 rounded-full mb-4">
                Keynote Speaking
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                "AI is the iceberg. You either see it and adapt, or you become
                the Titanic."
              </h1>
              <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
                Adenola delivers powerful, actionable keynotes that transform
                how organizations approach AI strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="content-container">
            <div className="flex flex-col lg:flex-row gap-12">
              <div
                ref={videoRef}
                className="w-full lg:w-1/2 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 bg-navy-900">
                    <div className="flex items-center justify-center">
                      {/*  <div className="text-platinum-300 text-center p-8">
                        <Users size={48} className="mx-auto mb-4" />
                        <p className="text-lg">
                          2-minute highlight reel of keynote speech
                          <br />
                          <span className="text-sm">
                            (Video player will appear here)
                          </span>
                        </p>
                      </div> */}
                      <YouTubeVideo
                        videoId="KUKxuIPgsZY"
                        title="AI Strategy for Business Leaders"
                        className="shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                </div>
              </div>

              <div
                ref={contentRef}
                className="w-full lg:w-1/2 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
              >
                <h2 className="section-heading mb-6">
                  Adapt or Be Left Behind
                  <span className="text-gold-500">.</span>
                </h2>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  In this powerful keynote, Adenola Adegbesan reveals why AI
                  isn't just a technology trend but an existential business
                  imperative. Drawing on real-world case studies and predictive
                  data, he demonstrates the stark divide between organizations
                  that will thrive and those that will become obsolete.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Key Takeaways from This Talk:
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gold-500" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-navy-900">
                        The $2 Trillion Playbook
                      </p>
                      <p className="text-gray-600">
                        How Tesla, Airbnb & OpenAI rewrote the business
                        landscape
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gold-500" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-navy-900">
                        Kodak & Nokia's $200 Billion Mistake
                      </p>
                      <p className="text-gray-600">
                        Why leaders fail when they ignore technological shifts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gold-500" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-navy-900">
                        AI-Powered Business Mastery
                      </p>
                      <p className="text-gray-600">
                        How AI is transforming decision-making, leadership, and
                        corporate survival
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-navy-500" />
                    <span>
                      Duration: 45-90 minutes, customizable for your event
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-navy-500" />
                    <span>
                      Ideal for: Executive teams, boardrooms, leadership
                      summits, industry conferences
                    </span>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                  >
                    Book This Keynote Now{' '}
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-50">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-heading">
                Other Speaking Topics
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-600">
                Adenola offers a range of thought-provoking keynotes tailored to
                your organization's specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="premium-card hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    AI Leadership: The C-Suite Advantage
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How top executives are using AI to make faster, smarter
                    decisions and outpace their competition.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="premium-card hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    The Future of Finance: AI Revolution
                  </h3>
                  <p className="text-gray-600 mb-6">
                    How AI is transforming investment strategies, risk
                    management, and financial forecasting.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="premium-card hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    AI Ethics & Governance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Navigating the complex legal and ethical landscape of AI
                    implementation in business.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Speaking;
