/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Book, Globe, Award, MessageSquare } from 'lucide-react';
import suite from "../assets/Suit.png"

const BookSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={sectionRef}
      className="section-padding bg-navy-50"
      id="book"
    >
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-4">Global Thought Leadership</span>
          <h2 className="section-heading mb-6">
            The Legal Lifeline of Global Businesses
            <span className="text-gold-500">.</span>
          </h2>
          <p className="text-lg text-gray-700">
            Helping business leaders navigate the complexities of disruption in an ever-changing business world.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            ref={imageRef}
            className="w-full md:w-5/12 opacity-0 translate-x-[-20px] transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500"></div>
              <div className="relative overflow-hidden rounded-md shadow-xl">
                <img 
                  src={suite} 
                  alt="Adenola Adegbesan's book - The Legal Lifeline of Global Businesses" 
                  className="w-full h-auto object-cover rounded-md transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className="w-full md:w-7/12 opacity-0 translate-x-[20px] transition-all duration-1000 ease-out"
          >
            <h3 className="text-2xl font-bold mb-4 text-navy-900">The Legal Lifeline of Global Businesses in the Post-Pandemic Era</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In this groundbreaking work, Adenola Adegbesan provides business leaders with essential strategies to navigate legal complexities in a disrupted global landscape. Drawing from extensive research and real-world case studies, this book serves as an indispensable guide for organizations seeking to thrive amid uncertainty.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-900 mb-1">Global Impact & Recognition</h4>
                  <p className="text-gray-600">Available in multiple languages including German, Spanish, French, Italian, Polish, and Portuguese, establishing Adenola as a truly global thought leader in business adaptation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-900 mb-1">Key Insights</h4>
                  <p className="text-gray-600">Explores legal frameworks for digital transformation, ethical governance strategies, and practical approaches to managing cross-border compliance in volatile markets.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-900 mb-1">Ethical AI Advocacy</h4>
                  <p className="text-gray-600">Adenola champions the ethical use of AI in business, highlighting how responsible innovation can drive competitive advantage while maintaining legal compliance and social responsibility.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book"
                className="premium-button inline-flex"
              >
                <Book className="w-5 h-5 mr-2" />
                Learn More
              </Link>
              <a 
                href="mailto:adenola@example.com" 
                className="premium-button-outline inline-flex"
              >
                Contact About Speaking
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4 text-navy-900">Available in 6 Languages</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">DE</span>
              </div>
              <span className="text-sm text-gray-600">German</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">ES</span>
              </div>
              <span className="text-sm text-gray-600">Spanish</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">FR</span>
              </div>
              <span className="text-sm text-gray-600">French</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">IT</span>
              </div>
              <span className="text-sm text-gray-600">Italian</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">PL</span>
              </div>
              <span className="text-sm text-gray-600">Polish</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-navy-800 font-bold">PT</span>
              </div>
              <span className="text-sm text-gray-600">Portuguese</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;