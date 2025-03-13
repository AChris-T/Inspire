import { Link } from 'react-router-dom';
import { ArrowRight, Youtube, BookOpen } from 'lucide-react';
import YouTubeVideo from './YoutubeVideo';

const BlogVideo = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-950/5 to-navy-950/10">
      <div className="content-container">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-navy-900" />
          </div>
          <h2 className="section-heading mb-4">
            <span className="gold-highlight">Insights</span> & Featured Content
          </h2>
          <p className="text-lg text-platinum-700 max-w-3xl mx-auto">
            Explore my latest thoughts on AI strategy, governance, and
            leadership through blogs and keynote presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Featured Video */}
          <div className="premium-card p-4 sm:p-6 flex flex-col gap-6 reveal-left reveal-visible">
            <div className="flex items-center gap-3 mb-2">
              <Youtube className="w-6 h-6 text-gold-500" />
              <h3 className="text-2xl font-bold text-navy-900">
                Featured Keynote
              </h3>
            </div>
            <YouTubeVideo
              videoId="KUKxuIPgsZY"
              title="AI Strategy for Business Leaders"
              className="shadow-lg"
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold text-navy-800">
                AI Strategy for Business Leaders
              </h4>
              <p className="text-platinum-700">
                In this keynote presentation from the Global AI Summit, I
                discuss how business leaders can develop strategic frameworks
                for AI adoption that align with their organizational values and
                goals.
              </p>
            </div>
          </div>

          {/* Blog Preview */}
          <div className="premium-card p-4 sm:p-6 flex flex-col gap-6 reveal-right reveal-visible">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-gold-500" />
              <h3 className="text-2xl font-bold text-navy-900">
                Latest Blog Posts
              </h3>
            </div>

            <div className="space-y-6">
              <div className="border-b border-platinum-200 pb-4">
                <h4 className="text-lg font-semibold text-navy-800 mb-2">
                  The Executive's Guide to AI Governance
                </h4>
                <p className="text-platinum-700 mb-3">
                  How to establish robust governance frameworks that ensure
                  ethical AI deployment while maximizing business value.
                </p>
                <span className="text-sm text-platinum-500">
                  March 15, 2023
                </span>
              </div>

              <div className="border-b border-platinum-200 pb-4">
                <h4 className="text-lg font-semibold text-navy-800 mb-2">
                  Five AI Implementation Pitfalls and How to Avoid Them
                </h4>
                <p className="text-platinum-700 mb-3">
                  Common mistakes that organizations make when implementing AI
                  solutions and strategies to overcome them.
                </p>
                <span className="text-sm text-platinum-500">
                  February 28, 2023
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-navy-800 mb-2">
                  AI and the Future of Financial Services
                </h4>
                <p className="text-platinum-700 mb-3">
                  How AI is transforming investment strategies, risk management,
                  and client services in the financial sector.
                </p>
                <span className="text-sm text-platinum-500">
                  January 12, 2023
                </span>
              </div>
            </div>

            <Link
              to="/blog"
              className="flex items-center justify-center gap-2 premium-button mt-4"
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogVideo;
