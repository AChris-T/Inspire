import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Check, ChevronRight, Users } from 'lucide-react';

const Course = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const animationTimer1 = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100');
        titleRef.current.classList.remove('translate-y-4');
      }
    }, 300);

    const animationTimer2 = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('opacity-100');
        contentRef.current.classList.remove('translate-y-8');
      }
    }, 600);

    const animationTimer3 = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('opacity-100');
        ctaRef.current.classList.remove('translate-y-8');
      }
    }, 900);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer1);
      clearTimeout(animationTimer2);
      clearTimeout(animationTimer3);
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center opacity-10"></div>
          <div className="content-container relative z-10">
            <div
              ref={titleRef}
              className="text-center mb-8 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
              <BookOpen size={48} className="mx-auto mb-4 text-gold-500" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI for Business Leaders: <br />
                <span className="text-gold-500">Adapt or Be Left Behind</span>
              </h1>
              <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
                An exclusive executive program designed to transform your
                organization with AI-powered strategy and decision-making.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="content-container">
            <div
              ref={contentRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-2/3">
                  <h2 className="section-heading mb-6">
                    The Premier AI Leadership Course for Executives
                    <span className="text-gold-500">.</span>
                  </h2>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    In today's business landscape, AI isn't just a competitive
                    advantage—it's a survival requirement. This intensive
                    executive program is specifically designed for C-suite
                    executives, board members, and senior leaders who need to
                    understand the strategic implications of AI without getting
                    lost in technical jargon.
                  </p>

                  <div className="premium-card p-8 mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Exclusive Course Benefits:
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-navy-900">
                            AI-Powered Decision-Making Frameworks
                          </p>
                          <p className="text-gray-600">
                            The same frameworks used by Fortune 500 CEOs to make
                            strategic decisions
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-navy-900">
                            Live Strategy Sessions with Adenola
                          </p>
                          <p className="text-gray-600">
                            Direct access to Adenola's expertise in AI
                            leadership and strategy
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-navy-900">
                            The InspireEdge AI Experience
                          </p>
                          <p className="text-gray-600">
                            Hands-on AI SWOT Analysis & Market Predictions for
                            your specific industry
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-navy-900">
                            Executive Networking
                          </p>
                          <p className="text-gray-600">
                            Direct access to an exclusive network of elite
                            investors & CEOs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    Course Structure:
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="premium-card p-6">
                      <h4 className="font-semibold text-navy-900 mb-2">
                        Module 1: AI Strategy Fundamentals
                      </h4>
                      <p className="text-gray-600">
                        Understanding the AI landscape, key terminology, and
                        strategic implications without technical complexity.
                      </p>
                    </div>

                    <div className="premium-card p-6">
                      <h4 className="font-semibold text-navy-900 mb-2">
                        Module 2: AI-Powered Decision Making
                      </h4>
                      <p className="text-gray-600">
                        How to leverage AI for faster, more accurate business
                        decisions at the executive level.
                      </p>
                    </div>

                    <div className="premium-card p-6">
                      <h4 className="font-semibold text-navy-900 mb-2">
                        Module 3: AI Implementation & Transformation
                      </h4>
                      <p className="text-gray-600">
                        Practical frameworks for integrating AI into your
                        organization without disruption.
                      </p>
                    </div>

                    <div className="premium-card p-6">
                      <h4 className="font-semibold text-navy-900 mb-2">
                        Module 4: AI Leadership & Governance
                      </h4>
                      <p className="text-gray-600">
                        Managing AI ethics, compliance, and building an AI-ready
                        organization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3">
                  <div className="premium-card p-8 sticky top-24">
                    <h3 className="text-xl font-semibold mb-6 text-center">
                      Course Details
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-gold-500 mr-3" />
                        <div>
                          <p className="font-medium text-navy-900">Duration</p>
                          <p className="text-gray-600">6 weeks, part-time</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gold-500 mr-3" />
                        <div>
                          <p className="font-medium text-navy-900">
                            Cohort Size
                          </p>
                          <p className="text-gray-600">
                            Limited to 25 executives
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-gold-500 mr-3" />
                        <div>
                          <p className="font-medium text-navy-900">Format</p>
                          <p className="text-gray-600">
                            Virtual live sessions & on-demand content
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-semibold mb-2">Investment</p>
                      <p className="text-3xl font-bold text-navy-900 mb-4">
                        $9,997
                      </p>
                      <p className="text-sm text-gray-600 mb-6">
                        Corporate team packages available
                      </p>

                      <Link
                        to="/contact"
                        className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950 w-full"
                      >
                        Apply Now - Limited Enrollment{' '}
                        <ChevronRight size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={ctaRef}
          className="py-16 bg-navy-900 text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading text-white mb-6">
                Ready to Transform Your Leadership with AI?
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-platinum-300 mb-8">
                Join the exclusive group of forward-thinking executives who are
                leveraging AI to stay ahead of the curve.
              </p>
              <Link
                to="/contact"
                className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
              >
                Apply for the Next Cohort{' '}
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Course;
