import { useState } from 'react';

import { BookOpen, Search, Filter } from 'lucide-react';
import { blogPosts } from '../data/BlogPost';
import BlogHero from '../components/BlogHero';
import BlogList from '../components/BlogList';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [
    'all',
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <div className="min-h-screen">
      {/* <Helmet>
        <title>
          Blog | Adenola Adegbesan | AI Strategy & Leadership Expert
        </title>
        <meta
          name="description"
          content="Insights on AI leadership, strategy, ethics, and business transformation from AI expert Adenola Adegbesan."
        />
        <meta
          name="keywords"
          content="AI blog, AI leadership blog, AI strategy insights, AI ethics discussions, AI implementation guide, AI business transformation, Adenola Adegbesan blog"
        />
      </Helmet> */}

      <main>
        <BlogHero />

        <section className="content-container py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-navy-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert perspectives on AI leadership, ethics, and business
                transformation
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              {/* Search */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category filter */}
              <div className="w-full md:w-1/3 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="w-full pl-10 pr-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600 appearance-none bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Blog post list */}
      {/*       <BlogList posts={filteredPosts} />
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-medium mb-2">No articles found</h3>
                <p className="text-platinum-700">
                  Try a different search term or category
                </p>
              </div>
            )}
            */}
              </div> 
        </section>
      </main>
    </div>
  );
};

export default Blog;
