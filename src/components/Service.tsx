/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Shield,
  Users,
  BarChart,
} from 'lucide-react';
import ServiceIcon from '../assets/ServiceIcon';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add('opacity-100');
              titleRef.current.classList.remove('translate-y-4');
            }
            if (cardsRef.current) {
              cardsRef.current.classList.add('opacity-100');
              cardsRef.current.classList.remove('translate-y-8');
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
      id="services"
    >
      <div className="content-container">
        <div
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          <div className=" flex justify-center items-center mb-6">
            <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
              <ServiceIcon />
            </div>
          </div>
          <span className="badge mb-4">Services</span>
          <h2 className="section-heading mb-6">
            AI Strategy, Governance & Business Transformation
            <span className="text-gold-500">.</span>
          </h2>
          <p className="text-lg text-gray-700">
            Adenola helps Fortune 500 companies, executives, and policymakers
            navigate the AI revolution with strategic insights and practical
            implementation.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
        >
          {/* AI Strategy Card */}
          <div className="premium-card group">
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                <BarChart className="w-6 h-6 text-navy-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AI Business Strategy
              </h3>
              <p className="text-gray-600 mb-6 lg:h-[150px]">
                Transform AI from a tool into a strategic advantage with
                sustainable AI-powered roadmaps aligned with business
                objectives.
              </p>
              <Link
                to="/consulting"
                className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Governance Card */}
          <div className="premium-card group">
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                <Shield className="w-6 h-6 text-navy-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AI Governance & Compliance
              </h3>
              <p className="text-gray-600 mb-6">
                Develop AI policies and frameworks that ensure trust,
                transparency and mitigate risks while maximizing AI potential.
              </p>
              <Link
                to="/consulting"
                className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Executive Training Card */}
          <div className="premium-card group">
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                <Users className="w-6 h-6 text-navy-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Executive AI Training
              </h3>
              <p className="text-gray-600 mb-6 lg:h-[150px]">
                Equip decision-makers with AI-driven insights and train
                executives to use AI for high-stakes decisions and leadership.
              </p>
              <Link
                to="/course"
                className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* InspireEdge Card */}
          <div className="premium-card group">
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                <LineChart className="w-6 h-6 text-navy-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">InspireEdge AI</h3>
              <p className="text-gray-600 mb-6  lg:h-[150px]">
                AI-powered business intelligence platform with 1.2M+ data points
                processed for predictive analytics and strategic insights.
              </p>
              <Link
                to="/inspireedge"
                className="inline-block font-medium text-navy-900 hover:text-navy-700 transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
