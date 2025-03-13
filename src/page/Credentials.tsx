 
import {
  Briefcase,
  ChevronRight,
  Star,
  Users,
  Globe,
  Lightbulb,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Credentials() {
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (achievementsRef.current) {
      achievementsRef.current.classList.add('opacity-100', 'translate-y-0');
      achievementsRef.current.classList.remove('opacity-0', 'translate-y-8');
    }
  }, []);

  return (
    <div>
      <section className="py-16 bg-navy-50">
        <div className="content-container">
          <div
            ref={achievementsRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {/* Title Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading mb-6">
                Credentials & Achievements
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                Shaping the Future of AI, Business, and Governance Through Data,
                Strategy & Innovation
              </p>
            </div>

            {/* Grid Layout for Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* AI & Business Leadership */}
              <div className="premium-card p-8">
                <Lightbulb className="w-12 h-12 text-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  AI & Business Leadership
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ Diploma in Business Management – Oxford University</li>
                  <li>✅ MBA – University of the People, USA</li>
                  <li>
                    ✅ Creator of InspireEdge AI – AI-powered business strategy
                    tool
                  </li>
                  <li>✅ AI Consultant for Fortune 500 Executives</li>
                </ul>
              </div>

              {/* Finance & Strategic Planning */}
              <div className="premium-card p-8">
                <Briefcase className="w-12 h-12 text-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Finance & Strategic Planning
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ Certified Financial Modelling & Valuation Analyst</li>
                  <li>✅ Certified Business Intelligence & Data Analyst</li>
                  <li>✅ Corporate & Business Strategy Expert</li>
                  <li>✅ Lean Six Sigma Black Belt – Business Optimization</li>
                </ul>
              </div>

              {/* Governance & Risk Compliance */}
              <div className="premium-card p-8">
                <ShieldCheck className="w-12 h-12 text-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Corporate Governance & Risk
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ The Art of Effective Boards (2024)</li>
                  <li>✅ Risk Management – IBMI, Germany</li>
                  <li>✅ Fellow, Institute of Leadership & Development</li>
                  <li>✅ Member, Harvard Business Review Advisory Council</li>
                </ul>
              </div>

              {/* Project Management & Operations */}
              <div className="premium-card p-8">
                <Target className="w-12 h-12 text-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Project Management & Operations
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ Agile Project Management – HP Foundation</li>
                  <li>✅ Advanced Project Management – Regenesys SA</li>
                  <li>✅ Open University UK – Project Management</li>
                  <li>✅ Lean Six Sigma Black Belt</li>
                </ul>
              </div>

              {/* Sustainability & Ethics */}
              <div className="premium-card p-8">
                <Globe className="w-12 h-12 text-gold-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Sustainability & Ethics
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ Digital Security & Human Rights – Amnesty Intl.</li>
                  <li>✅ Right to Privacy in the Digital Age – South Africa</li>
                  <li>✅ Human Trafficking Awareness – Stanford University</li>
                  <li>
                    ✅ Sustainability & Green Business – Warwickshire Network
                  </li>
                </ul>
              </div>
            </div>

            {/* Speaking & Media Appearances */}
            <div className="premium-card p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">
                    Speaking & Media Appearances
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Adenola is a sought-after speaker and media commentator on
                    AI business strategy, digital transformation, and the future
                    of leadership in an AI-first world.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">TED Global</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">
                        World Economic Forum
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">
                        Fortune 500 Innovation Summit
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">
                        Harvard Business School
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">
                        Bloomberg Technology
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">
                        CNBC Business Leaders
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/speaking"
                    className="premium-button bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    View Speaking Topics{' '}
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="bg-navy-900 text-white p-6 rounded-lg">
                    <Users className="w-10 h-10 text-gold-500 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      Audience Reach
                    </h4>
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

            {/* Conclusion */}
            <div className="text-center max-w-3xl mx-auto mt-16">
              <h2 className="section-heading mb-6">
                AI, Business Strategy & Ethical Leadership
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                I collaborate with enterprises, governments, and global
                organizations to drive AI innovation, ethical governance, and
                business sustainability. Let's shape the future together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
