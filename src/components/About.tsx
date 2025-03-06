import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add('opacity-100');
              imageRef.current.classList.remove('translate-x-[-20px]');
            }
            if (contentRef.current) {
              contentRef.current.classList.add('opacity-100');
              contentRef.current.classList.remove('translate-x-[20px]');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="about">
      <div className="content-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            ref={imageRef}
            className="w-full md:w-5/12 opacity-0 translate-x-[-20px] transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500"></div>
              <div className="relative overflow-hidden rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Adenola Adegbesan"
                  className="w-full h-auto object-cover aspect-[3/4] rounded-md transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className="w-full md:w-7/12 opacity-0 translate-x-[20px] transition-all duration-1000 ease-out"
          >
            <span className="badge mb-4">About Adenola</span>
            <h2 className="section-heading mb-6">
              AI Strategist & Governance Expert
              <span className="text-gold-500">.</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Adenola Adegbesan helps leaders and organizations transform AI
              from a tool into a strategic advantage, developing governance
              frameworks that ensure trust, transparency and compliance.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-navy-900 mb-1">
                    Leadership & Expertise
                  </h3>
                  <p className="text-gray-600">
                    Harvard Business Review Advisory Council Member, Fellow at
                    Corporate Governance Institute UK, Founder of InspireEdge AI
                    with 1.2M+ data points processed
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-navy-900 mb-1">
                    Professional Credentials
                  </h3>
                  <p className="text-gray-600">
                    Certified Financial Modeling & Valuation Analyst (FMVA),
                    Certified Business Intelligence & Data Analyst (BIDA),
                    Change Management Lead at Ashcott International
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-navy-900 mb-1">
                    Client Impact
                  </h3>
                  <p className="text-gray-600">
                    Developed AI governance frameworks adopted by 17
                    organizations, helped financial institutions achieve 43%
                    faster processing and $4.2M in operational savings
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="premium-button inline-flex">
              Learn More About Adenola
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
