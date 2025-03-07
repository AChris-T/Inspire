import { ArrowRight } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
      <div className="content-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-text mb-6">
            AI Strategy <span className="gold-highlight">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-platinum-100 leading-relaxed">
            Expert perspectives on AI leadership, ethics, and business
            transformation to help your organization thrive in an AI-first
            world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#latest-posts" className="premium-button group">
              <span>Latest Articles</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
