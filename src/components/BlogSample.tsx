import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

const MediumPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const mediumUsername = 'inspirecraftglobal8'; // Replace with your Medium username

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const parser = new Parser();
        const proxyUrl = 'https://api.allorigins.win/raw?url='; // Proxy to avoid CORS issues
        const feedUrl = `https://medium.com/feed/@${mediumUsername}`;
        const feed = await parser.parseURL(
          proxyUrl + encodeURIComponent(feedUrl)
        );

        const fetchedPosts = feed.items.map((item) => ({
          title: item.title || 'Untitled',
          link: item.link || '#',
          pubDate: item.pubDate || '',
          contentSnippet: item.contentSnippet || '',
        }));

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Medium Blogs</h2>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post, index) => (
            <li key={index} className="p-3 border rounded-md shadow">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold"
              >
                {post.title}
              </a>
              <p className="text-sm text-gray-500">{post.pubDate}</p>
              <p className="text-gray-700">{post.contentSnippet}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MediumPosts;
