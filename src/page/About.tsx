import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Award, Briefcase, ChevronRight, GraduationCap, Star, Users } from 'lucide-react';
import AboutImage from '../assets/IMG-20250307-WA0078.jpg';
import SuitImage from '../assets/Suit.png';
import ThisOne from '../assets/IMG-20250307-WA0072.jpg';
import MVet from '../assets/IMG-20250307-WA0075.jpg';

const About = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const animateContent = () => {
      if (imageRef.current) {
        imageRef.current.classList.add('opacity-100');
        imageRef.current.classList.remove('translate-x-[-20px]');
      }
      
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.classList.add('opacity-100');
          contentRef.current.classList.remove('translate-x-[20px]');
        }
      }, 300);
      
      setTimeout(() => {
        if (achievementsRef.current) {
          achievementsRef.current.classList.add('opacity-100');
          achievementsRef.current.classList.remove('translate-y-8');
        }
      }, 600);
      
      setTimeout(() => {
        if (galleryRef.current) {
          galleryRef.current.classList.add('opacity-100');
          galleryRef.current.classList.remove('translate-y-8');
        }
      }, 900);
    };

    setTimeout(animateContent, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-white">
          <div className="content-container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div 
                ref={imageRef}
                className="w-full lg:w-5/12 opacity-0 translate-x-[-20px] transition-all duration-1000 ease-out"
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-500"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-500"></div>
                  <div className="relative overflow-hidden rounded-md">
                    <img 
                      src={AboutImage}
                      alt="Adenola Adegbesan professional portrait" 
                      className="w-full h-auto object-cover aspect-[3/4] rounded-md transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div 
                ref={contentRef}
                className="w-full lg:w-7/12 opacity-0 translate-x-[20px] transition-all duration-1000 ease-out"
              >
                <span className="badge mb-4">About Adenola</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  The AI-powered business transformation strategist
                  <span className="text-gold-500">.</span>
                </h1>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Adenola Adegbesan is the AI-powered business transformation strategist trusted by Fortune 500 executives, hedge funds, and policymakers. He doesn't just talk about the future—he builds it.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With a unique blend of expertise in AI, business strategy, finance, and law, Adenola brings a multidisciplinary approach to business transformation that few can match. His InspireEdge AI platform has revolutionized how executives make strategic decisions, providing AI-powered insights that drive measurable business results.
                </p>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  As a keynote speaker, Adenola is known for his thought-provoking, no-nonsense approach to AI business strategy. His signature keynote, "AI is the iceberg. You either see it and adapt, or you become the Titanic," has been delivered to audiences across five continents.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/speaking" 
                    className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                  >
                    Book For Keynote <ChevronRight size={20} className="ml-2" />
                  </Link>
                  <Link 
                    to="/consulting" 
                    className="premium-button-outline border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                  >
                    Request AI Consulting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-50">
          <div className="content-container">
            <div 
              ref={achievementsRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="section-heading mb-6">
                  Credentials & Achievements
                  <span className="text-gold-500">.</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Adenola's multidisciplinary expertise enables him to bridge the gap between AI technology and business leadership.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="premium-card p-8">
                  <Award className="w-12 h-12 text-gold-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">AI & Business Leadership</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Harvard Business Review Advisory Council Member</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">AI Consultant for Fortune 500 Executives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Creator of InspireEdge AI – AI-powered business strategy tool</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">International Keynote Speaker on AI Business Strategy</span>
                    </li>
                  </ul>
                </div>

                <div className="premium-card p-8">
                  <Briefcase className="w-12 h-12 text-gold-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Finance & Strategic Planning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Certified Financial Modeling & Valuation Analyst (FMVA)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Certified Business Intelligence & Data Analyst (BIDA)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Lean Six Sigma Black Belt – Business Process Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Former Financial Strategy Consultant for Global Investment Firms</span>
                    </li>
                  </ul>
                </div>

                <div className="premium-card p-8">
                  <GraduationCap className="w-12 h-12 text-gold-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Legal & Governance Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Bar Practicing Certificate – Nigeria Law School</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">LLB – Olabisi Onabanjo University</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">Enterprise Design Thinking Practitioner – IBM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-gray-700">AI Ethics & Governance Policy Advisor</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="premium-card p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4">Speaking & Media Appearances</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Adenola is a sought-after speaker and media commentator on AI business strategy, digital transformation, and the future of leadership in an AI-first world.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">TED Global</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">World Economic Forum</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">Fortune 500 Innovation Summit</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">Harvard Business School</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">Bloomberg Technology</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gold-500 mr-2" />
                        <span className="text-gray-700">CNBC Business Leaders</span>
                      </div>
                    </div>
                    <Link 
                      to="/speaking" 
                      className="premium-button bg-navy-900 hover:bg-navy-800 text-white"
                    >
                      View Speaking Topics <ChevronRight size={20} className="ml-2" />
                    </Link>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="bg-navy-900 text-white p-6 rounded-lg">
                      <Users className="w-10 h-10 text-gold-500 mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Audience Reach</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Live Audiences:</span>
                          <span className="font-semibold">500,000+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Countries:</span>
                          <span className="font-semibold">35+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Corporate Events:</span>
                          <span className="font-semibold">200+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Online Reach:</span>
                          <span className="font-semibold">2M+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="content-container">
            <div 
              ref={galleryRef}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="section-heading mb-6">
                  Adenola in Moments
                  <span className="text-gold-500">.</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Highlights from Adenola's speaking engagements, consulting work, and leadership events across the globe.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={ThisOne}
                    alt="Adenola Adegbesan delivering a keynote speech"
                    className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-navy-900 font-medium">Keynote at The Diamond Speakers Academy</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={MVet}
                    alt="Adenola Adegbesan at a networking event"
                    className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-navy-900 font-medium">VIP Book Signing & Networking</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={SuitImage}
                    alt="Adenola Adegbesan speaking at a cultural event"
                    className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-navy-900 font-medium">Leadership Address at Cultural Summit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-900 text-white">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading text-white mb-6">
                Work with Adenola
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-xl text-platinum-300 mb-8">
                Transform your organization with AI-powered strategic insights from a global thought leader.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/speaking" 
                  className="premium-button bg-gold-500 hover:bg-gold-600 text-navy-950"
                >
                  Book For Keynote <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link 
                  to="/consulting" 
                  className="premium-button-outline border-platinum-300 text-platinum-100 hover:bg-navy-800 hover:border-navy-800"
                >
                  Request AI Consulting
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default About;