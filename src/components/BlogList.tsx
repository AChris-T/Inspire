import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Blog } from '../types';

interface BlogListProps {
  posts: Blog[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div
      id="latest-posts"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => (
        <div key={post.id} className="premium-card flex flex-col h-full">
          <img
            src={post.coverImage}
            alt={post.imageAlt}
            className="w-full h-56 object-cover rounded-t-md"
            loading="lazy"
          />
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center mb-4">
              <span className="badge">{post.category}</span>
              <span className="ml-auto text-sm text-platinum-500">
                {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-platinum-600 mb-6 flex-grow">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="animated-underline text-navy-900 font-medium inline-flex items-center"
            >
              Read More
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
