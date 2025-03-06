import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title,
  className = '',
  autoplay = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg shadow-xl ${className}`}
    >
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}${
            autoplay ? '?autoplay=1' : ''
          }`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full luxury-shadow"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
